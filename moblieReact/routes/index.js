import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/Home"
import BottomTabs from '../screens/tab'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' screenOptions = {{ headerShown : false }}>
            <Stack.Screen name="Home" component={BottomTabs}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}


export default Routes