import { StyleSheet } from "react-native"
import { PADDING } from "../../tools/constantes"

const styles = StyleSheet.create({
    item:{
        marginRight:15,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    itemImg:{
        width:30,
        height:30,
        marginRight:5
    }
})

export default styles