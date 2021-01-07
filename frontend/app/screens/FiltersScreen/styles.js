import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    
  },
  logo: {
    marginTop: 35,
    width: 100,
    height: 100
  },

  containerFilter: {
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: "space-between",
    
  },

  filter: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  filtertext: {
    fontSize: 20,
    
    padding: 3,
    color: 'black',
    fontFamily: 'Chilanka_400Regular', 
  },
  
});
export default styles;
