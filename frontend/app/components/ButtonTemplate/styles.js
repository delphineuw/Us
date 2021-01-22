import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    buttonFullRed: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F25C75',
        width: 300,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
        // bottom: 45,
    },
    buttonEmptyRed: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#F25C75',
        backgroundColor: 'white',
        width: 300,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonEmptyBlack: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        width: 300,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFullGreen: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#047C7C',
        width: 300,
        borderRadius: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWhite: {
        color: 'white',
        fontSize: 20,
    },
    textRed: {
        color: '#F25C75',
        fontSize: 20,
    },
    textBlack: {
        color: 'black',
        fontSize: 20,
    }
    });

export default styles;