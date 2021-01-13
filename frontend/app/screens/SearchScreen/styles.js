import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF'
  },

  logo: {
    marginTop: 60,
    width: 100,
    height: 100
  },

  containerFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    bottom: 10
  },

  containerFilterDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: "yellow",
    bottom: 35,
    height: 250
  },

  filter: {
    fontSize: 35,
    color: 'black',
    fontFamily: 'Chilanka_400Regular',
    marginTop: 10,
    margin: 10
  },
  filtertext: {
    fontSize: 20,
    padding: 2,
    color: 'black',
    fontFamily: 'Chilanka_400Regular'
  },

  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 400
  }
});
export default styles;
