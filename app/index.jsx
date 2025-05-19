import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View
    // className="bg-red-500"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit eeeapp/index.tsx to edit this screen.</Text>
    <TouchableOpacity onPress={() => router.push("/home")} className="bg-blue-500 p-4 rounded">
      <Text>change route</Text></TouchableOpacity>
    </View>
  );
}
