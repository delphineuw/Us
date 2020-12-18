import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    participant: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        borderColor: '#eee',
        borderWidth: 1,
        padding: 2,
    },
    imageParticipant: {
        height: 80,
        width: 80,
        borderRadius: 100/2,
        margin: 10,
        backgroundColor: 'lightgrey'
    },
    textParticipant: {
        fontSize: 20,
    },
    alignParticipant: {
        flexDirection: 'row',
        alignItems:'center',
    },
    iconparticipant: {
        flexDirection: 'row',
    },
    checkBoxParticipant: {
        marginRight: 40,
        marginTop: 5,
        // width: 25,
        // height: 25,
    },
});

export default styles;