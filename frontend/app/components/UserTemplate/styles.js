import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '30%',
    width: 330
  },
  text: {
    fontSize: 20,
    margin: 20,
    color: 'grey',
    fontWeight: 'bold'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  gridUser: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginLeft: '60%'
  },
  hobbies: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: '16%'
  },
  content: {
   margin: 5,
   alignItems: 'center',
  },
  gridHobby: {
    margin: 5
  },
  texthobby: {
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Chilanka_400Regular',
    fontSize: 18 
  },
  textcontent: {
    margin: 9
  }
});
export default styles;
