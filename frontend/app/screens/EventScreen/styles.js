import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
    },
    head: {
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
  
        backgroundColor: '#rgba(21,133,130, 0.8)'
    },
    textHead: {
        display: 'flex',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 35,
        marginTop: 35,
        marginLeft: 15,
        marginBottom: 35,
        color: 'white',
    },
    imgLogo: {
        marginTop: 200,
        width: 200,
        height: 200,
        zIndex: -1,
        position: 'absolute',
        // shadowOffset:{  width: 250,  height: 250,  },
        // shadowColor: 'black',
        // shadowOpacity: 5.0,
        
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 15
    },
    event: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default styles;
