import { ScrollView, StatusBar, Text, TouchableOpacity, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";
import hand from "../assets/images/hand1.png";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-[#f3d3d9] flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={logo}
            style={{
              width: 350,
              height: 150,
              marginTop: 50,
            }}
          />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="bg-[#ff4380] border-2 border-[#ff4380] p-2 my-2 mt-10 rounded-lg"
            >
              <Text className="text-xl font-semibold text-center text-white">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="border-2 border-[#ff4380] p-2 rounded-lg"
            >
              <Text className="text-xl font-semibold text-center text-[#ff4380]">Guest User</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-center text-base font-semibold my-4 text-[#ff9994] mt-5">
              <View className="border-b-2 border-[#ff4380] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#ff4380] p-2 mb-1 w-24" />
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="flex flex-row items-center justify-center"
            >
              <Text className="text-[#ff9994] font-semibold text-base">Already a user? </Text>
              <Text className="text-base font-semibold text-[#ff4380] underline">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute bottom-0 left-0 right-0 h-40">
          <Image source={hand} className="w-full h-full" resizeMode="cover" />
        </View>
        <StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />
      </ScrollView>
    </SafeAreaView>
  );
}
