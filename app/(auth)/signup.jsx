import { Formik } from 'formik';
import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import hand from '../../assets/images/hand1.png';
import logo from '../../assets/images/logo.png';
// Fix the import path to match your actual file structure
import validationSchema from '../../utils/signupSchema.jsx';

const Signup = () => {
    const { width, height } = useWindowDimensions();
const router = useRouter();

    // Responsive calculations
    const logoWidth = width * 0.8; // 80% of screen width
    const logoHeight = logoWidth * (344 / 726); // Maintain aspect ratio
    const bottomImageHeight = height * 0.3; // 30% of screen height

    const handleSignup = (values) => {
        console.log('Form submitted with values:', values);
        // Add your signup logic here
    }

    return (
        <SafeAreaView className="bg-[#f3d3d9] flex-1">
            <StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />

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
                        <Text className="text-xl text-center text-[#ff9994] font-bold mb-1">
                            Let's get you started!
                        </Text>
                    </View>

                    {/* Form */}
                    <View className="w-full max-w-md mx-auto px-4">
                        <Formik
                            initialValues={{ email: "", password: "", name: "" }}
                            validationSchema={validationSchema}
                            onSubmit={handleSignup}
                        >
                            {({ handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched }) => (
                                <View className="w-full">
                                    <Text className="text-[#ff4380] font-semibold text-base mb-1">Name</Text>
                                    <TextInput
                                        keyboardType='default'
                                        placeholder='Enter your name'
                                        onChangeText={handleChange("name")}
                                        onBlur={handleBlur("name")}
                                        value={values.name}
                                        className="h-10 rounded-md bg-white text-[#ff4380] px-3 mb-2"
                                    />
                                    {touched.name && errors.name &&
                                        <Text className="text-red-500 text-xs mb-2">{errors.name}</Text>
                                    }

                                    <Text className="text-[#ff4380] font-semibold text-base mb-1 mt-2">Email</Text>
                                    <TextInput
                                        keyboardType="email-address"
                                        placeholder='Enter your email'
                                        onChangeText={handleChange("email")}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        className="h-10 rounded-md bg-white text-[#ff4380] px-3 mb-2"
                                    />
                                    {touched.email && errors.email &&
                                        <Text className="text-red-500 text-xs mb-2">{errors.email}</Text>
                                    }

                                    <Text className="text-[#ff4380] font-semibold text-base mb-1 mt-2">Password</Text>
                                    <TextInput
                                        secureTextEntry
                                        placeholder='Enter your password'
                                        onChangeText={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        className="h-10 rounded-md bg-white text-[#ff4380] px-3 mb-2"
                                    />
                                    {touched.password && errors.password &&
                                        <Text className="text-red-500 text-xs mb-2">{errors.password}</Text>
                                    }

                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        className="bg-[#ff4380] border-2 border-[#ff4380] p-2 my-4 rounded-lg"
                                    >
                                        <Text className="text-lg font-semibold text-center text-white">Sign Up</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                        <View>
                            <TouchableOpacity
                                onPress={() => router.push("/signin")}
                                className="flex-row items-center justify-center "
                            >
                                <Text className="text-[#ff9994] font-semibold">Already a user? </Text>
                                <Text className="font-semibold text-[#ff4380] underline">Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Image - Positioned absolutely */}
            <View className=" bottom-0 left-0 right-0" style={{ height: bottomImageHeight }} stickyHeaderIndices ={[0]}>
                <Image
                    source={hand}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            </View>
        </SafeAreaView>
    );
}

export default Signup;