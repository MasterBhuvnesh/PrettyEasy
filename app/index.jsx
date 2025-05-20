import { ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {Image} from "react-native";
import logo from "../assets/images/react-logo.png";
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#f3d3d9]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View>
          <Image
            source={logo}
            style={{
              width: 400,
              height: 200,
              marginTop: 50,
              paddingLeft: 20,
            }}/>
        </View>
      </ScrollView>  
    </SafeAreaView>
  );
}
