import { StyleSheet } from "react-native"
import {PADDING} from '../../tools/constantes'



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
    scrollableListItem:{
      paddingHorizontal : 15,
      paddingVertical : 15,
      marginRight : 15,
      backgroundColor : 'white',
      elevation : 1
    },
    mainText:{
        fontWeight: 'bold',
        fontSize:16
    },
    subText:{
        marginTop : 3,
        fontSize:12
    }
})

export default dashboardStyles