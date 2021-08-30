import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        borderRadius: 5,
    },
    title: {
        fontSize: 20,
        borderBottomColor: '#dadada',
        borderBottomWidth: 1,
        marginBottom: 20,
    },
    summary: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progress: {
        height: 16,
        borderRadius: 2,
        marginTop: 10,
        marginBottom: 3,
        backgroundColor: '#dadada',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});