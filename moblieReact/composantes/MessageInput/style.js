import { StyleSheet } from "react-native"
import {COLORS, PADDING} from './../../tools/constantes'
const styles = StyleSheet.create({
    container: {
        padding: 4,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    input:{
        padding:10,
        flex:1,
        backgroundColor:'white',
        marginRight:15,
        width:50,
        height:50,
        borderRadius:50/2,
        
    },
    send:{
        
        padding:10,
        backgroundColor:'#33D1FF',
        width:50,
        height:50,
        borderRadius:50/2,
        alignItems :"center",
        color:"white"      
    }
})

export default styles