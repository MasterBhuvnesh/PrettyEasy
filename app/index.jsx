import { ScrollView, StatusBar, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/logo.png";
import hand from "../assets/images/hand1.png";

export default function Index() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  
  // Responsive calculations
  const logoWidth = width * 0.8; // 80% of screen width
  const logoHeight = logoWidth * (344/726); // Maintain aspect ratio
  const bottomImageHeight = height * 0.3; // 25% of screen height

  return (
    <SafeAreaView className="bg-[#f3d3d9] flex-1">
      <StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />
      
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 px-4"
      >
        <View className="flex-1 justify-between pb-20">
          {/* Top content */}
          <View className="items-center pt-10">
            <Image
              source={logo}
              style={{
                width: logoWidth,
                height: logoHeight,
                marginTop: height * 0.05,
                marginBottom: height * 0.03,
              }}
              resizeMode="contain"
            />
            </View>
            <View className="flex-1 justify-center items-center">
            <View className="w-full max-w-xs">
              <TouchableOpacity
                onPress={() => router.push("/signup")}
                className="bg-[#ff4380] border-2 border-[#ff4380] p-3 my-2 rounded-lg"
              >
                <Text className="text-lg font-semibold text-center text-white">Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/home")}
                className="border-2 border-[#ff4380] p-3 my-2 rounded-lg"
              >
                <Text className="text-lg font-semibold text-center text-[#ff4380]">Guest User</Text>
              </TouchableOpacity>
            </View>
            
            {/* Divider */}
            <View className="flex-row items-center justify-center w-full max-w-xs my-4">
              <View className="flex-1 h-0.5 bg-[#ff4380]" />
              <Text className="mx-2 text-[#ff9994] font-semibold">or</Text>
              <View className="flex-1 h-0.5 bg-[#ff4380]" />
            </View>

            {/* Sign in */}
            <TouchableOpacity
              onPress={() => router.push("/signin")}
              className="flex-row items-center justify-center mt-2"
            >
              <Text className="text-[#ff9994] font-semibold">Already a user? </Text>
              <Text className="font-semibold text-[#ff4380] underline">Sign In</Text>
            </TouchableOpacity>
          </View>
          
          {/* Empty space at bottom to account for absolute image */}
          <View style={{ height: bottomImageHeight }} />
        </View>
      </ScrollView>
      
      {/* Bottom Image - Positioned absolutely */}
      <View className="absolute bottom-0 left-0 right-0" style={{ height: bottomImageHeight }}>
        <Image 
          source={hand} 
          className="w-full h-full" 
          resizeMode="cover" 
        />
      </View>
    </SafeAreaView>
  );
}