import { View, Text,Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'

import fakeSettings from '../../fakeData/fakeSetting.js'
import SettingItem from '../../composantes/SettingItem'

const Settings = () => {
  return (
    <View style={styles.container}>
      {/*header*/}
      <View style={styles.header}>
        <Image source={require('./../../assets/tendance.webp')} style={styles.image}/>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Marcel Coulibaly</Text>
          <Text style={styles.userEmail}>marcelcoulibaly@gmail.com</Text>
          <Text>+255 07 79 58 54 00</Text>
        </View>
      </View>
      {/*header*/}

      <FlatList 
      data={fakeSettings}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> 
        {
          return <SettingItem item={item}/>
        }
      }/>
      
    </View>
  )
}

export default Settings