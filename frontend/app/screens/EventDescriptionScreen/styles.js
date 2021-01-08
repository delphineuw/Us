import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        height: 250
    },
    layer: {
        backgroundColor: '#f8f8f8',
        width: '100%',
        borderColor: '#eee',
        borderWidth: 1,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    viewTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
    },
    catTitle: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    title: {
        fontSize: 20,
        paddingTop: 3,

    },
    timeAddess: {
        fontSize: 15,
        paddingLeft: 5,
    },
    addressStyle: {
        display: 'flex',
        flexDirection: 'row'
    },
    desc: {
        fontWeight: 'bold',
        fontSize: 22
    },
    descText: {
        fontSize: 17,
    },
    layerWhite: {
        padding: 15,
    },
    imgFlex: {
        display: 'flex',
        flexDirection: 'row',
    },
    imgPart: {
        width: 40,
        height: 40,
        borderRadius: 50/2,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 0,
    },
    btnContainer: {
        width: '100%',  
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 45
    }
    });

export default styles;