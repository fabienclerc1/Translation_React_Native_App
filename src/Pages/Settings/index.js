import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Axios from '../../Components/API';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles.js';

const Settings = ({navigation}) => {
    const [listLanguages, setListLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [apiKey, setApiKey] = useState();

    const StoreKey = async (key) => {
        try {
            await AsyncStorage.setItem('@apiKey', key);
            if (key !== null) setApiKey(key);
        } catch(error) {
            console.log('Unable to store API key.');
        }
    };

    const GetKey = async () => {
        try {
            const key = await AsyncStorage.getItem('@apiKey');
            if (key !== null) setApiKey(key);
        } catch(error) {
            console.log('Unable to retrieve API key.');
        }
    };

    const StoreLanguage = async (lang) => {
        try {
            await AsyncStorage.setItem('@defaultLang', lang);
            if (lang !== null) setSelectedLanguage(lang);
        } catch (error) {
            console.log('Unable to store default language.');
        }
    };

    const GetDefaultLanguage = async () => {
        try {
            const lang = await AsyncStorage.getItem('@defaultLang');
            if (lang !== null) setSelectedLanguage(lang);
        } catch (error) {
            console.log('Unable to retrieve default language.');
        }
    };

    useEffect(() => {
        GetKey();
    }, []);

    useEffect(() => {
        apiKey && FetchLanguages();
    }, [apiKey]);

    useEffect(() => {
        listLanguages && GetDefaultLanguage();
    }, [listLanguages]);

    const FetchLanguages = async() => {
        try {
            const url = `languages?auth_key=${apiKey}`;
            const response = await Axios.post(url);
            setListLanguages(response.data.sort((a, b) => {let x = a.name < b.name ? -1 : 1; return x; }));
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <ScrollView style={styles.wrapper} >
            <View style={styles.card} >
                <Text style={styles.title} >API key</Text>
                <Text style={styles.description} >Enter the API key available in your DeepL account</Text>
                <TextInput style={styles.input} onChangeText={key => StoreKey(key)} value={apiKey} placeholder="Type API key" placeholderTextColor="#c4c4c4" ></TextInput>
            </View>
            <View style={styles.card} >
                <Text style={styles.title} >Default language</Text>
                <Text style={styles.description} >Preferred language to translate into</Text>
                <View style={styles.dropdownWrapper} >
                    <Picker style={styles.dropdown} dropdownIconColor='black' selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => {StoreLanguage(itemValue)}}>
                        {listLanguages.map(lang => <Picker.Item style={styles.dropdownItem} label={lang.name} value={lang.language} key={uuid.v4()}/>)}
                    </Picker>
                </View>
            </View>
        </ScrollView>
    )
};

export default Settings;