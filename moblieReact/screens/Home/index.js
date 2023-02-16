import { View, Text, ScrollView,Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import dashboardStyles from './style.js'
import { FakeActivity } from '../../fakeData/fakeActivity.js'
import ActivityItem from '../../composantes/ActivityItem/index.js'
import SymptomItem from '../../composantes/SymptomItem'
import { fakeSymptom } from '../../fakeData/fakeSymptom.js'
import {fakeDoctor} from '../../fakeData/fakeDoctor.js'


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
          <ActivityItem  item={item}/>
        )}}
          
      />

      <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}> Quel symptomes avez vous ?</Text>
      </View>
      <FlatList 
        data={fakeSymptom}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => 
        {return (
          <SymptomItem  item={item}/>
        )}}
          
      />


      <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}> Nos Docteurs</Text>
        <TouchableOpacity>
           <Text style={dashboardStyles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>
      
      <View style={dashboardStyles.doctorsContainer}>
          {
            fakeDoctor.map((doctor, index) => {
              return (
                <TouchableOpacity key={doctor.id} style={dashboardStyles.doctorCard}>
                  <Image source={{ uri: `${doctor.img}` }} style={dashboardStyles.doctorImg}/>
                  <View style={dashboardStyles.doctorInfo}>
                      <Text style={dashboardStyles.doctorName}>{doctor.fullname}</Text>
                      <Text style={dashboardStyles.doctorSpec}>{doctor.speciality}</Text>
                  </View>
                </TouchableOpacity>  
              )
            })
          }
      </View>

    </ScrollView>
  )
}

export default Home