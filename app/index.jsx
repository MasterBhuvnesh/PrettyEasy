import { ScrollView, StatusBar, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {Image} from "react-native";
import logo from "../assets/images/logo.png";
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#f3d3d9]`}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image
            source={logo}
            style={{
              width: 400,
              height: 200,
              marginTop: 50,
            }}/>
        </View>
      </ScrollView>  
    </SafeAreaView>
  );
}
