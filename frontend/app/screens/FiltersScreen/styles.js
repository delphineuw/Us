import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  logo: { width: 100, height: 100 },
  containerFilter: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' },
  filter: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginVertical: 30,
  },
  filtertext: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginVertical: 10,
  },
  
});

export default styles;
