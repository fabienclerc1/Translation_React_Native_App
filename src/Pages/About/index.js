import React from 'react';
import {ScrollView, Text} from 'react-native';
import {styles} from './styles.js';

const About = ({navigation}) => {
    return (
        <ScrollView style={styles.wrapper}>
            <Text style={styles.paragraph} >This app implements the API provided by DeepL to translate text.</Text>
            <Text style={styles.paragraph} >PreRelease v0.1.0 - 2021.</Text>
        </ScrollView>
    )
};



export default About;