import { StyleSheet } from "react-native";
import {PADDING} from './../../tools/constantes' 

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    flex:1,
  },
  header:{
    marginTop:19,
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    elevation:5,
    marginBottom: 10

  },
  image:{
    
    width:80,
    height:80,
    borderRadius:80/2
  },
  userInfo:{
    marginLeft:15,
  },
  userName:{
    fontWeight:'bold',
    marginBottom:1
  },
  userEmail:{
    marginBottom:1,
  }
})

export default styles