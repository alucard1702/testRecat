import { StyleSheet } from "react-native" 
import {COLORS, PADDING} from '../../tools/constantes'
const style = StyleSheet.create({
    messageContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    messageImg:{
        width:50,
        height:50,
        borderRadius:50/2,
        marginRight: 15
    },
    messageInfo:{
        flexDirection: 'column',
        flex:1,
        paddingHorizontal: PADDING.horizontal,

    },
    date_name:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:5
    },
    name:{
        fontWeight:'bold',
        marginRight:5
    }
})

export default style 