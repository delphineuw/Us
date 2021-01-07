import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  logo: {
    width: 100,
    height: 100
  },

  containerFilter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center', 
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    
    width: 100,
    height: 300,
  },

  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 200,
    backgroundColor: 'red',

  },

  filter: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  filtertext: {
    fontSize: 20,
    marginVertical: 20,
    padding: 10,
    color: 'black',
    fontFamily: 'Chilanka_400Regular', 
  },
  
});
export default styles;
