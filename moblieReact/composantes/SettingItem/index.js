import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import styles from './style'

const SettingItem =({item})=> {
    return(
        <TouchableOpacity style={styles.container}>
            <Text>{item.libelle}</Text>
            <AntDesign name="arrowright" size={20} color={"#33D1FF"}/>
        </TouchableOpacity>
    )
}

export default SettingItem