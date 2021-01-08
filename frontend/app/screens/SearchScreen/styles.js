import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    
  },
  logo: {
    marginTop: 10,
    width: 100,
    height: 100
  },

  containerFilter: {
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: "space-between",
  
  },

  filter: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginTop:10,
    margin: 10,
   
  },
  filtertext: {
    fontSize: 20,
    
    padding: 3,
    color: 'black',
    fontFamily: 'Chilanka_400Regular', 
  },

  separator:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 400,
   }
  
});
export default styles;