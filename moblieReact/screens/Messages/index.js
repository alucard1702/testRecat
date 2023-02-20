import {View, Text, FlatList} from 'react-native'
import React from 'react'
import fakeChat from '../../fakeData/fakeChat'
import messages from './style.js'
import MessageList from '../../composantes/MessageList'

const Messages = ({navigation}) =>{
    return (
        <FlatList
         style={messages.header} 
         data={fakeChat}
         showsVerticalScrollIndicator={false}
         keyExtractor = {item => item.id}
        renderItem={({item}) =>
        {
            return <MessageList item={item} navigation={navigation}/>;
        }}
        />
    )
}

export default Messages