import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    description: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    input: {
        backgroundColor: '#f1f1f1',
        borderRadius: 2,
        color: 'black',
        height: 50,
        paddingLeft: 15,
    },
    dropdownWrapper: {
        borderRadius: 2,
        backgroundColor: '#f1f1f1',
    },
    dropdown: {

        borderRadius: 2,

    },
});