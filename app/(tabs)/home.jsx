import { View, Text ,Image,ImageBackground,Platform,ScrollView, TouchableOpacity,ActivityIndicator, FlatList} from 'react-native'
import React, { use } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../../assets/images/logo.png' 
import banner from '../../assets/images/banner.png'
import { BlurView } from 'expo-blur'
import { useState, useEffect } from 'react';
import { collection,getDocs,query } from 'firebase/firestore'
// import {salons} from '../../store/salons' // Assuming this is the correct path to your salons data
import { db } from '../../config/firebaseConfig'; // Import your Firebase configuration

const Home = () => {

const[salons, setSalons] = useState([]); // Using the salons data from the store
  
  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-[#ffffffaf] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md">
      <Image resizeMode='cover' 
      source={{uri:item.image}}
      className=" h-28 rounded-lg mb-1 mt-2"
      />
      <Text className="text-lg text-[#ff4380] font-bold mb-2">{item.name}</Text>
       <Text className=" text-base mb-2">{item.address}</Text>
      <Text className="text-base mb-2">
  Open: <Text className="text-[#ff4380]">{item.opening}</Text> ~ Close: <Text className="text-[#ff4380]">{item.closing}</Text>
</Text>


      </TouchableOpacity>
  );

const getSalons = async () => {
  const q = query(collection(db, "salons"));
  const res = await getDocs(q);
res.forEach((item)=>{
  setSalons((prev) => [...prev, item.data()]);
});
};

useEffect(()=>{
  getSalons();
},[]);

  return (
    <SafeAreaView style ={[{ backgroundColor:"#f3d3d9"},
    Platform.OS=="android" && {paddingBottom: 55},
    Platform.OS=="ios" && {paddingBottom: 20},
    ]} >
      <View className="flex items-center">
        <View className="bg-[#ffffffaf] w-11/12 rounded-lg shadow-lg justify-between items-center ">
          <View className="flex flex-row">

          <Text className ="text-base pt-[1] align-middle ">
            {" "}
            Welcome to{""}

          </Text>
          <Image resizeMode="cover" className ={"w-40 h-20"} source={logo}/>
          </View>
        </View>
       </View>
       <ScrollView stickyHeaderIndices ={[0]}>
          <ImageBackground resizeMode="cover" 
          className ="mb-4 w-full h-52 bg-[#F3D3D9] items-center justify-center"
            source={banner}>
            <BlurView intensity={75} tint="extraLight" >
              <Text className="text-3xl font-bold text-center text-[#29235C]">
                Book your appointment with us today!
                 </Text>

              
            </BlurView>
          </ImageBackground>
          <View className="p-4 bg-[#f3d3d9] flex-row items-center">
            <Text className="text-3xl font-semibold text-[#29235C]">
              Special Discount %
              </Text>
              </View>
          {
        salons.length>0?
        <FlatList data={salons} renderItem={renderItem} horizontal contentContainerStyle={{padding:16}} showsHorizontalScrollIndicator={false} scrollEnabled={true}  />
        :<ActivityIndicator animating color={"#ff4380"} />
       }
       <View className="p-4 bg-[#f3d3d9] flex-row items-center">
            <Text className="text-3xl font-semibold text-[#ff4380]">
              Our Salons
              </Text>
              </View>
          {
        salons.length>0?
        <FlatList data={salons} renderItem={renderItem} horizontal contentContainerStyle={{padding:16}} showsHorizontalScrollIndicator={false} scrollEnabled={true}  />
        :<ActivityIndicator animating color={"#ff4380"} />
       }
     
       </ScrollView>
       
    </SafeAreaView>  
    )
}

export default Home;