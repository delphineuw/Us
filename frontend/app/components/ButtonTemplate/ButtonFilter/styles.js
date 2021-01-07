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
        flexDirection: 'row',
        bottom: 0,
        marginBottom: 50,
        margin: 20,
        borderColor: 'black',
        justifyContent: 'flex-end',
        position: 'absolute',
        alignItems: 'center',
         },
    buttonFilter: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#F25C75',
        padding: 15,
        borderRadius: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonFilterColor: {
        marginTop: 25,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

    });

export default styles;