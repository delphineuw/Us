import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
    },
    head: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        backgroundColor: '#rgba(21,133,130, 0.8)'
    },
    imgLogo: {
        width: 150,
        height: 150,
        zIndex: -1,
        position: 'absolute'
    }
});

export default styles;
