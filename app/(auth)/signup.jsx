import { Formik } from 'formik';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import hand from '../../assets/images/hand1.png';
import logo from '../../assets/images/logo.png';
// Fix the import path to match your actual file structure
import validationSchema from '../../utils/signupSchema.jsx';

const Signup = () => {
    const handleSignup = (values) => {
        console.log('Form submitted with values:', values);
        // Add your signup logic here
    }
    
    return (
        <SafeAreaView className="bg-[#f3d3d9] ">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className="m-2 flex justify-center items-center">
                    <Image
                        source={logo}
                        style={{
                            width: 320,
                            height: 120,
                            marginTop: 70,
                        }}
                    />
                    <Text className="text-xl text-center text-[#ff9994] font-bold mb-5 mt-10">
                        Let's get you started!
                    </Text>
                </View>
                <View className="w-5/6">
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
                            <View className="w-full mx-10">

                                <Text className="text-[#ff4380] font-semibold text-base mb-2">Name</Text>
                                <TextInput
                                    keyboardType='default'
                                    placeholder='Enter your name'
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    value={values.name}
                                    className=" h-10 rounded bg-white text-[#ff4380] px-3 py-3 mb-4"
                                />
                                {touched.name && errors.name && <Text className="text-red-500 text-xs mb-2">{errors.name}</Text>}


                                <Text className="text-[#ff4380] font-semibold text-base mb-2">Email</Text>
                                <TextInput
                                    keyboardType="email-address"
                                    placeholder='Enter your email'
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("email")}
                                    value={values.email}
                                    className=" h-10 rounded bg-white text-[#ff4380] px-3 py-3 mb-4" />
                                {touched.email && errors.email && <Text className="text-red-500 text-xs mb-2">{errors.email}</Text>}

                                <Text className="text-[#ff4380] font-semibold text-base mb-2">Password</Text>
                                <TextInput
                                    secureTextEntry
                                    placeholder='Enter your password'
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    className=" h-10 rounded bg-white text-[#ff4380] px-3 py-3 mb-4" />
                                {touched.password && errors.password && <Text className="text-red-500 text-xs mb-2">{errors.password}</Text>}


                                <TouchableOpacity
                                    onPress={handleSubmit}
                                    className="bg-[#ff4380] border-2 border-[#ff4380] p-2 my-2 mt-10 rounded-lg"
                                >
                                    <Text className="text-xl font-semibold text-center text-white">Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </Formik>
                </View>
                <View className="absolute bottom-0 left-0 right-0 h-60">
                    <Image source={hand} className="w-full h-full" resizeMode="cover" />
                </View>

                <StatusBar barStyle={"light-content"} backgroundColor={"#f3d3d9"} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Signup;