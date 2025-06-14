import { useRouter } from "expo-router";
import { Formik } from "formik";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import hand from "../../assets/images/hand1.png";
import logo from "../../assets/images/logo.png";
// Fix the import path to match your actual file structure
import { auth } from "@/config/firebaseConfig"; // Import your Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import validationSchema from "../../utils/signupSchema.jsx";

const SignIn = () => {
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  const logoWidth = width * 0.8;
  const logoHeight = logoWidth * (344 / 726);
  const bottomImageHeight = height * 0.3;

  const handleSignin = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      console.log("User logged in:", user.email);
      router.replace("/(tabs)/home"); // Redirect to home after successful login
    } catch (error) {
      console.error("Login error:", error.message);
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <SafeAreaView className="bg-[#f3d3d9] flex-1">
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"#f3d3d9"}
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 px-4"
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 pb-24">
          {/* Logo */}
          <View className="items-center">
            <Image
              source={logo}
              style={{
                width: logoWidth,
                height: logoHeight,
                marginTop: height * 0.03,
                marginBottom: height * 0.02,
              }}
              resizeMode="contain"
            />
            <Text className="text-xl text-center text-[#ff9994] font-bold mb-2">
              Welcome to our app!
            </Text>
          </View>

          {/* Form */}
          <View className="w-full max-w-md mx-auto px-4">
            <Formik
              initialValues={{ email: "", password: "", name: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSignin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="w-full">
                  <Text className="text-[#ff4380] font-semibold text-base mb-2 mt-1">
                    Email
                  </Text>
                  <TextInput
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    className="h-10 rounded-md bg-white text-[#ff4380] px-3 mb-2"
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-500 text-xs mb-1">
                      {errors.email}
                    </Text>
                  )}

                  <Text className="text-[#ff4380] font-semibold text-base mb-2 mt-1">
                    Password
                  </Text>
                  <TextInput
                    secureTextEntry
                    placeholder="Enter your password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    className="h-10 rounded-md bg-white text-[#ff4380] px-3 mb-2"
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-500 text-xs mb-1">
                      {errors.password}
                    </Text>
                  )}

                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-[#ff4380] border-2 border-[#ff4380] p-2 my-4 rounded-lg"
                  >
                    <Text className="text-lg font-semibold text-center text-white">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <View>
              <TouchableOpacity
                onPress={() => router.push("/signup")}
                className="flex-row items-center justify-center "
              >
                <Text className="text-[#ff9994] font-semibold">New user? </Text>
                <Text className="font-semibold text-[#ff4380] underline">
                  Sign Up
                </Text>
              </TouchableOpacity>
              <View className="flex-row items-center justify-center w-full my-4 ">
                <View className="flex-1 h-0.5  bg-[#ff4380]" />
                <Text className="mx-2 text-[#ff9994] font-semibold">or</Text>
                <View className="flex-1 h-0.5 bg-[#ff4380]" />
              </View>

              {/* Sign in */}
              <TouchableOpacity
                onPress={() => router.push("/home")}
                className="flex-row items-center justify-center mt-1"
              >
                <Text className="text-[#ff9994] font-semibold">Be a </Text>
                <Text className="font-semibold text-[#ff4380] underline">
                  Guest User
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Image - Positioned absolutely */}
      <View
        className="bottom-0 left-0 right-0"
        style={{ height: bottomImageHeight }}
      >
        <Image
          source={hand}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
