import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2',
    },
    topContainer: {
        height: '30%',
        width: '100%',
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: 'white',
    },
    middleContainer: {
        height: '10%',
        minHeight: 70,
        width: '97%',
        flex: 1,
        flexDirection: 'row',
        flexGrow: 0,
        paddingTop: 5,
        paddingBottom: 5,
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '60%',
        width: '100%',
        paddingBottom: 5,
    },
    empty: {
        height: '60%',
        width: '100%',
    },
    middleLeft: {
        width: '50%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'white',
        marginRight: 3,
    },
    middleRight: {
        width: '50%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
    },
    input: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.8)',
        borderWidth: 0,
        textAlignVertical: 'top',
        fontSize: 16,
        padding: 8,
    },
    actions: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icons: {
        marginRight: 15,
    },
    dropdown: {
        height: '100%',
        width: '100%',
    },
    dropdownItem: {
        backgroundColor: 'white',
        fontSize: 20,
    },
    submitButton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2f80ec',
        borderRadius: 4,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: {
        color: 'white',
        fontSize: 20,
    },
    outputContainer: {
        width: '97%',
        borderRadius: 2,
        backgroundColor: 'white',
    },
    scrollContainer: {
        maxHeight: '90%',
    },
    output: {
        fontSize: 16,
        padding: 6,
    },
});