import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerComponent = ({date, setDate}) => {

    const [show, setShow] = useState(false);
   
    const onChange=(event,selectedDate)=>{
        const currentDate = selectedDate||date;
        setShow(false);
            setDate(currentDate);
        

    }
    const handlePress = () => {
        setShow(true)
    }
    return (
        <View className="flex flex-row">
            <TouchableOpacity onPress={handlePress}
            className={` rounded-lg text-white text-base
                ${ Platform.OS ==="android" && "mx-5 px-2 py-1 justify-center bg-[#383650]"

                }`
            }
            >
                {Platform.OS === "android" && 
                (<Text className="text-white">{date.toLocaleDateString()}</Text>)}
                {Platform.OS === "android" && show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        textColor="#d39da7"
                        accentColor="#d39da7"
                        display="default"
                        onChange={onChange}
                        minimumDate={new Date()}
                        maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                    />
                )}
                {
                    Platform.OS === "ios" && (

                        <DateTimePicker
                            value={date}
                            mode="date"
                             onChange={onChange}
                            textColor="#d39da7"
                            accentColor="#d39da7"
                            display="default"
                            minimumDate={new Date()}
                            maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                        />
                    )}

            </TouchableOpacity>
        </View>
    )
}

export default DatePickerComponent