import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/Colors'
const TabLayout = () => {
  return (
   <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.PRIMARY,
    tabBarInactiveTintColor:Colors.dark.text,
    tabBarStyle:{
      backgroundColor:Colors.SECONDARY,
   paddingBottom:50,
      height:75,
     
    },
   }} >
     <Tabs.Screen name='home'options={{title:"Home"}}/>
      <Tabs.Screen name='history'options={{title:"History"}}/>
       <Tabs.Screen name='profile'options={{title:"Profile"}}/>

   </Tabs>
  )
}

export default TabLayout