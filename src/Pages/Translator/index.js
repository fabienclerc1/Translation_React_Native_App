import React, {useState, useEffect} from 'react';
import {TextInput, View, ScrollView, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import Axios from '../../Components/API';
import {Picker} from '@react-native-picker/picker';
import uuid from 'react-native-uuid';
import Clipboard from '@react-native-clipboard/clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles.js';

const Translator = ({navigation}) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [listLanguages, setListLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [apiKey, setApiKey] = useState();

    useEffect(() => {
        GetKey(); //get api key first
    }, []);

    useEffect(() => {
        apiKey && FetchLanguages();
    }, [apiKey]);

    useEffect(() => {
        listLanguages && GetDefaultLanguage();
    }, [listLanguages]);

    const GetDefaultLanguage = async () => {
        try {
            const lang = await AsyncStorage.getItem('@defaultLang');
            if (lang !== null) setSelectedLanguage(lang);
        } catch (error) {
            console.log('Unable to get default language from memory.');
        }
    };

    const GetKey = async () => {
        try {
            const key = await AsyncStorage.getItem('@apiKey');
            if (key !== null) {
                setApiKey(key);
            }
        } catch(error) {
            console.log('Unable to retrieve API key.');
        }
    };

    const FetchLanguages = async() => {
        const url = `languages?auth_key=${apiKey}`;
        const response = await Axios.post(url);
        setListLanguages(response.data.sort((a, b) => {
            let element = a.name < b.name ? -1 : 1;
            return element;
        }));
    };

    const OnTextChange = (text) => {
        setInput(text);
    };

    const OnSubmitRequest = async () => {
        const url = `translate?auth_key=${apiKey}&text=${input}&target_lang=${selectedLanguage}`;
        const response = await Axios.post(url);
        setOutput(response.data.translations[0].text);
    };

    const onCopyOutput = async () => {
        if (output !== '') await Clipboard.setString(output);
    };

    const onPasteFromClipboard = async () => {
        const text = await Clipboard.getString();
        setInput(text);
    };

    return (
        <View style={styles.wrapper} >
            <View style={styles.topContainer} >
                <TextInput style={styles.input} onChangeText={text => OnTextChange(text)} value={input} multiline= {true} numberOfLines = {4} placeholder="Type some text here" placeholderTextColor="#c4c4c4" />
                <TouchableOpacity style={styles.actions} onPress={onPasteFromClipboard}>
                    <Image style={styles.icons} source={require('../../Assets/pngs/paste.png')} tintColor='#c4c4c4' onPress={onPasteFromClipboard} />
                </TouchableOpacity>
            </View>
            <View style={styles.middleContainer} >
                <View style={styles.middleLeft} >
                    <Picker style={styles.dropdown} dropdownIconColor='black' selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => {setSelectedLanguage(itemValue)}}>
                        {listLanguages.map(lang => <Picker.Item style={styles.dropdownItem} label={lang.name} value={lang.language} key={uuid.v4()}/>)}
                    </Picker>
                </View>
                <View style={styles.middleRight}>
                    <TouchableOpacity style={styles.submitButton} onPress={OnSubmitRequest} >
                        <Text style={styles.submitText} >TRANSLATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {output.length > 0 ?
                <View style={styles.bottomContainer} >
                    <View style={styles.outputContainer} >
                        <ScrollView style={styles.scrollContainer}>
                            <Text style={styles.output} >{output}</Text>
                        </ScrollView>
                        <TouchableOpacity style={styles.actions} onPress={onCopyOutput}>
                            <Image style={styles.icons} source={require('../../Assets/pngs/copy.png')} tintColor='#c4c4c4' onPress={onCopyOutput} />
                        </TouchableOpacity>
                    </View>
                </View> : <View style={styles.empty} ></View>
            }
        </View>
    );
};

export default Translator;