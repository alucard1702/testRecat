import {View , Text, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const MessageInput = () =>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Entrez votre messages..."/>
            <MaterialCommunityIcons name='send' style={styles.send} size={24} />
        </View>
    )
}

export default MessageInput