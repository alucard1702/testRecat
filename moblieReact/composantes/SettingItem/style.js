import { StyleSheet } from "react-native"
import { PADDING } from "../../tools/constantes"

const styles = StyleSheet.create({
    container : {
        backgroundColor:'white',
        elevation: 5,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: PADDING.horizontal,
        

    }
})

export default styles