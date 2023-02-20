import {View, Text, FlatList} from 'react-native'
import React , {useEffect}from 'react'
import detial from './style'
import { fakeConversation } from '../../fakeData/fakeConversetion'
import Message from '../../composantes/Message'
import MessageInput from '../../composantes/MessageInput'

const MessagesDetials = ({route, navigation}) =>{
    const {item} = route.params

    useEffect(() => {
        navigation.setOptions({title: item.fullname})
    })
    return(
        <View style={{ flex:1 }}>
            <FlatList data={fakeConversation} 
            keyExtractor={item => item.id}
            renderItem={({item}) => {
                return <Message item={item}/>
            }}/>
            <MessageInput/>
        </View>
    )
}

export default MessagesDetials