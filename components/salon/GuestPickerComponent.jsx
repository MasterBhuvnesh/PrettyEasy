import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'



const GuestPickerComponent = ({ selectedNumber ,setSelectedNumber}) => {

  const decrement = () => {
    if(selectedNumber>1)
    setSelectedNumber(selectedNumber-1)
  };
  const increment = () => {
    if(selectedNumber<5)
setSelectedNumber(selectedNumber+1)
  }

  return (
    <View className="flex flex-row items-center rounded-lg text-white text-base">
      <TouchableOpacity
        onPress={decrement}
        

      >
        <Text className="text-white text-lg border border-[#d39da7] rounded-l-lg  px-3">-</Text>
      </TouchableOpacity>

      <Text className="px-3 text-white bg-[#383650] border border-[#383650] text-lg">
        {selectedNumber}
      </Text>

      <TouchableOpacity
        onPress={increment}
    
      >
        <Text className="text-white text-lg border border-[#d39da7] rounded-r-lg  px-3">+</Text>
      </TouchableOpacity>
    </View>

  )
}

export default GuestPickerComponent