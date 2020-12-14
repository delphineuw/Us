import { StyleSheet } from 'react-native';

const stylesRed = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '15%',
        },
        head: {
        color: 'black',
        fontSize: 30
    },
    containingViewOfButton: {
        flexDirection: 'column',
        bottom: 0,
        marginBottom: 50,
        margin: 20,
        borderColor: 'black',
        justifyContent: 'flex-end',
        position: 'absolute',
        alignItems: 'center',
        
    },
    buttonSave: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F25C75',
        width: 300,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSave: {
        color: 'white',
        fontSize: 20,
    }
    });

export default stylesRed;