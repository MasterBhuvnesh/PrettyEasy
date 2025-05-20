import { ScrollView, StatusBar, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {Image} from "react-native";
import logo from "../assets/images/logo.png";
import hand from "../assets/images/hand.png";
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#f3d3d9]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={logo}
            style={{
              size: 100,
              width: 370,
              height: 150,
              marginTop: 100,
            }}/>
            <View className="w-3/4">
            <TouchableOpacity onPress={() => router.push("/signup")} className="bg-[#ff4380] border-2 border-[#ff4380] p-4 my-5 mt-20 rounded-lg text-white">
              <Text className="text-xl font-semibold text-center color-white">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/home")} className="border-2 border-[#ff4380]  p-4 rounded-lg text-white">
              <Text className="text-xl font-semibold text-center color-[#ff4380]">Guest User</Text>
            </TouchableOpacity>
            
            </View>
            <View>
              <Text className="text-center text-base font-semibold my-4 text-[#ff9994] mt-5">
                <View className="border-b-2  border-[#ff4380] p-2 mb-1 w-24"/> or{""}
                <View className="border-b-2  border-[#ff4380] p-2 mb-1 w-24"/>
              </Text>

              <TouchableOpacity onPress={() => router.push("/signin")} className="flex flex-row items-center justify-center" >
                <Text className="text-[#ff9994] font-semibold text-base">
                  Already a user?{" "}
                </Text>
                <Text className="text-base font-semibold text-[#ff4380] underline">SignIn
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        <View className="flex-1">
          <Image
            source={hand}
           className="w-full h-full" resizeMode ="contain"/>

        </View>
<StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />
      </ScrollView>  
    </SafeAreaView>
  );
}
