import { StyleSheet } from "react-native"
import {COLORS, PADDING} from '../../tools/constantes'



const dashboardStyles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection : 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.vertical,
        backgroundColor: 'white',
    },
    img: {
        width: 50,
        height : 50,
        borderRadius: 50/2,
    },
    userName: {
        fontSize: 16,
    },

    //Styliser la flatlist

    scrollableList:{
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.vertical,
    },
    
    title: {
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.paddingVertical,
    },

    title_space_between: {
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.paddingVertical,
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    titleBold: {
        fontWeight: 'bold'
    },
    link: {
        color:COLORS.main,
    },
    doctorsContainer : {
        marginTop:15,
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.paddingVertical,
    },
    doctorCard:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        elevation:5,
        padding:10,
        paddingHorizontal : PADDING.horizontal,
        paddingVertical : PADDING.vertical,
        marginBottom:20,
        borderRadius:5 
    },
    doctorImg:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginRight:15
    },
    doctorInfo :{
        flexDirection:'column',
        justifyContent:'center',
    },
    doctorName :{
        fontWeight:'bold',
        fontSize:16
    },
    doctorSpec:{
        marginTop:3,
        fontSize:14,
        color:COLORS.main,

    }
})

export default dashboardStyles