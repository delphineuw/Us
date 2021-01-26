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
    gridHobbies: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 20,
    },
    btnContainer: {
        width: '100%',  
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 45
    },
    });

export default styles;