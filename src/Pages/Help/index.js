import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Panel from '../../Components/Panel';
import {DataTable} from 'react-native-paper';
import { Row, Col, Grid } from "react-native-easy-grid";
import {styles} from './styles.js';

const Help = ({navigation}) => {
    return (
        <ScrollView style={styles.wrapper} >
            <Panel title='Translation'>
                <Grid>
                    <Row style={styles.row} >
                        <Col size={25} >
                            <Text>Text</Text>
                        </Col>
                        <Col size={75}>
                            <Text>Translation with auto-detection of the source language implemented.</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row} >
                        <Col size={25}>
                            <Text>Document</Text>
                        </Col>
                        <Col size={75}>
                            <Text>Feature planned. Not implemented yet.</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row} >
                        <Col size={25}>
                            <Text>Glossary</Text>
                        </Col>
                        <Col size={75}>
                            <Text>Feature planned. Not implemented yet.</Text>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel title='Settings'>
                <Grid>
                    <Row style={styles.row}>
                        <Col size={25}>
                            <Text>API key</Text>
                        </Col>
                        <Col size={75}>
                            <Text>The API key can be found under Settings in your DeepL account. Only the Free API is supported yet.</Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col size={25}>
                            <Text>Default language</Text>
                        </Col>
                        <Col size={75}>
                            <Text>Default destination language for translation.</Text>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel title='Feedback & bug report'>
                <Text>Suggestions or bug report? Feel free to open an issue on GitHub or create a pull request.</Text>
            </Panel>
        </ScrollView>
    )
};

export default Help;