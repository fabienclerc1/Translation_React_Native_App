import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Translator from './src/Pages/Translator';
import Usage from './src/Pages/Usage';
import Settings from './src/Pages/Settings';
import Help from './src/Pages/Help';
import About from './src/Pages/About';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Translate" >
                <Drawer.Screen name="Translate" component={Translator} />
                <Drawer.Screen name="Usage" component={Usage} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name="About" component={About} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.8)',
        backgroundColor: '#f2f2f2',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
