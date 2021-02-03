import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  logo: {
    marginTop: 60,
    width: 100,
    height: 100
  },
  filter: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginTop: 10,
    margin: 10
  },
  inputBox : {
    height: 60,
    width: "100%",
    backgroundColor: '#ff5b77',
    justifyContent: 'center', 
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  },
  input : {
    height: 45,
    width: '95%',
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,    
  },
  events: {
    display: 'flex',
    flexDirection: 'row'
},
cardsWrapper: {
  marginTop: 10,
  marginLeft: 10,
  marginBottom : 10,
  width: 300,
  // alignSelf: 'center',
},
card: {
  height: 100,
  marginVertical: 10,
  flexDirection: 'row',
  shadowColor: '#999',
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 5,
},
cardImgWrapper: {
  flex: 1,
},
cardImg: {
  height: '100%',
  width: '100%',
  alignSelf: 'center',
  borderRadius: 8,
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
},
cardInfo: {
  flex: 2,
  padding: 10,
  borderColor: '#ccc',
  borderWidth: 1,
  borderLeftWidth: 0,
  borderBottomRightRadius: 8,
  borderTopRightRadius: 8,
  backgroundColor: '#fff',
},
cardTitle: {
  fontWeight: 'bold',
},
cardDetails: {
  fontSize: 12,
  color: '#444',
},
});
export default styles;
