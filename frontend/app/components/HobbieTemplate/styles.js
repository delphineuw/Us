import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textHobbies: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridHobbies: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
    },
    imageHobbies: {
        height: 100,
        width: 100,
        borderRadius: 100/2,
        margin: 10,
        backgroundColor: 'lightgrey'
    },
    pickedHobbies: {
        height: 100,
        width: 100,
        borderRadius: 100/2,
        margin: 10,
        borderWidth: 4,
        borderColor: 'limegreen',
    }
    });

export default styles;