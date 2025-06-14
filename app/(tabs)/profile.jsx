// Import necessary libraries and components
import { auth } from "@/config/firebaseConfig"; // Import Firebase authentication instance
import { useNavigation } from "@react-navigation/core"; // Import the navigation hook to handle navigation between screens
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"; // Import core components from React Native

// Define the ProfileScreen functional component
const ProfileScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get navigation control

  // Function to handle the user sign-out process
  const handleSignOut = () => {
    // Call the Firebase signOut function to log the user out
    auth
      .signOut()
      .then(() => {
        // After successful sign out, navigate to the SignIn screen
        navigation.navigate("index");
      })
      .catch((error) => alert(error.message)); // If there's an error during sign out, display an alert with the error message
  };

  // JSX to render the ProfileScreen UI
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

// Export the ProfileScreen component to be used in other parts of the app
export default ProfileScreen;

// Define styles for the ProfileScreen components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen
    justifyContent: "center", // Center elements vertically
    alignItems: "center", // Center elements horizontally
  },
  button: {
    backgroundColor: "#0782F9", // Button background color
    width: "60%", // Set button width to 60% of the screen width
    padding: 15, // Add padding inside the button
    borderRadius: 10, // Round the corners of the button
    alignItems: "center", // Center the button text
    marginTop: 40, // Add margin above the button
  },
  buttonText: {
    color: "white", // Set button text color to white
    fontWeight: "700", // Make the button text bold
    fontSize: 16, // Set the font size of the button text
  },
});
