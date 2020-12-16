import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 100,
  },

  plusCircle:{
    position: 'absolute',
    margin: 30,
    left: 150,
    bottom: 0,
    borderRadius:50,
    backgroundColor:'#fff',
  },


  rightCircle:{
    position: 'absolute',
    margin: 30,
    left: 0,
    bottom: 0,
    borderRadius:50,
  },

   pencilCircle: {
    position: 'absolute',
    margin: 30,
    right: 0,
    bottom: 0,
    borderRadius:50,
    },

  loginButton:{
    backgroundColor: 'pink',
    width: '50px'
  },

  // screenProfile:{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   paddingLeft:60,
  //   paddingRight:60
  // },
  regForm:{
    alignSelf: "stretch",
    justifyContent:'center',
    paddingRight:30,
    paddingLeft:30,
    marginTop:0
  },
  
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    borderBottomColor:'red',
    borderBottomWidth: 1,
    color:'black'
  },
  regBtnSave:{
    alignSelf:'stretch',
    alignItems:"center",
    padding:20,
    backgroundColor:'#FA26A0',
    marginTop:20,
  },
  regBtnHobbies:{
    alignSelf:'stretch',
    alignItems:"center",
    padding:20,
    backgroundColor:'green',
    marginTop:30,
  },
  btnText:{
    color: '#fff',
    fontWeight:'bold'
  }

});

export default styles;
