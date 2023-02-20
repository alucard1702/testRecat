import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/Home"
import BottomTabs from '../screens/tab'
import MessagesDetials from '../screens/MessageDetails'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions = {{ headerShown : false }}>
            <Stack.Screen name="Home" component={BottomTabs}/>
            <Stack.Screen name="MessageDetials" component={MessagesDetials} options={{ headerShown :true}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Routes