import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Axios from '../../Components/API';
import {ProgressBar} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles.js';

const Usage = ({navigation}) => {
    const isFocused = useIsFocused();
    const [usage, setUsage] = useState({character_limit: 1,character_count: 0});
    const [apiKey, setApiKey] = useState();

    useEffect(() => {
        GetKey(); //get api key first
    }, []);

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

    useEffect(() => {
        isFocused && apiKey && FetchUsage();
    }, [apiKey]);

    const FetchUsage = async () => {
        const url = `usage?auth_key=${apiKey}`;
        const response = await Axios.post(url);
        setUsage(response.data);
    };

    return (
        <View style={styles.wrapper} >
            <View style={styles.card} >
                <Text style={styles.title}>Character monthly usage</Text>
                <Text style={styles.summary} >{((usage.character_count / usage.character_limit) * 100).toFixed(2)} %</Text>
                <ProgressBar style={styles.progress} progress={usage.character_count / usage.character_limit} />
                <View style={styles.details} >
                    <Text>Count: {usage.character_count}</Text>
                    <Text>Limit: {usage.character_limit}</Text>
                </View>
            </View>
        </View>
    )
};

export default Usage;