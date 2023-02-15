import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashboardStyles from './style.js'
import { FakeActivity } from '../../fakeData/fakeActivity.js'
import SVG_HOSPITAL from '../../assets/undraw_medicine_b-1-ol.svg'

const Home = () => {
  return (
    <ScrollView>
      <View style={dashboardStyles.header}> 
        <Text style={dashboardStyles.userName}>Marcel Coulibaly</Text>  
        <Image style={dashboardStyles.img} source={require('./../../assets/tendance.webp')}/>
      </View>   
      <FlatList 
        data={FakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => 
        {return (
        <TouchableOpacity style={dashboardStyles.scrollableListItem}>
          
          <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
          <Text style={dashboardStyles.subText}>{item.subText}</Text>
        </TouchableOpacity>
        )}}
          
      />

    </ScrollView>
  )
}

export default Home