import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePickerComponent from "../../components/salon/DatePickerComponent";
import FindSlots from "../../components/salon/FindSlots";
import GuestPickerComponent from "../../components/salon/GuestPickerComponent";
import { db } from "../../config/firebaseConfig"; // Import your Firebase configuration

export default function Salon() {
  const { salon } = useLocalSearchParams();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = Dimensions.get("window").width;
  const [salonData, setSalonData] = useState({});
  const [carouselData, setCarouselData] = useState({});
  const [slotsData, setSlotsData] = useState({});
  const [date, setDate] = useState(new Date());
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleNextImage = () => {
    const carouselLength = carouselData[0]?.images?.length || 0;
    if (currentIndex < carouselLength - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
    if (currentIndex === carouselLength - 1) {
      const nextIndex = 0;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  const handlePrevImage = () => {
    const carouselLength = carouselData[0]?.images?.length || 0;
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
    }
    if (currentIndex === 0) {
      const prevIndex = carouselLength - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
    }
  };

  const carouselItem = ({ item }) => {
    return (
      <View
        style={{ width: windowWidth - 2 }}
        className="h-64 relative "
      >
        <View
          style={{
            position: "absolute",
            top: "50%",
            opacity: 0.7,
            backgroundColor: "black",
            borderRadius: 50,
            padding: 5,
            zIndex: 10,
            right: "6%",
          }}
        >
          <Ionicons
            onPress={handleNextImage}
            name="arrow-forward"
            size={24}
            color="white"
          />
        </View>
        {""}
        <View
          style={{
            position: "absolute",
            top: "50%",
            opacity: 0.7,
            backgroundColor: "black",
            borderRadius: 50,
            padding: 5,
            zIndex: 10,
            left: "2%",
          }}
        >
          <Ionicons
            onPress={handlePrevImage}
            name="arrow-back"
            size={24}
            color="white"
          />
        </View>

        <View
          style={{
            position: "absolute",
            display: "flew",
            justify: "center",
            alignItems: "center",
            flexDirection: "row",
            left: "50%",
            transform: [{ translateX: -20 }],
            zIndex: 10,
            bottom: 15,
          }}
        >
          {carouselData[0].images?.map((_, i) => (
            <View
              key={i}
              className={`bg-white h-2 w-2 ${
                i == currentIndex && "h-3 w-3 "
              } p-1 mx-1 rounded-full justify-center items-center`}
            />
          ))}
        </View>

        <Image
          source={{ uri: item }}
          style={{
            opacity: 0.5,
            backgroundColor: "black",
            marginRight: 20,
            marginLeft: 5,
            borderRadius: 25,
          }}
          className="h-64 mt-5"
        />
      </View>
    );
  };

  const handleLocation = async () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${salonData.latitude},${salonData.longitude}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  const getSalonData = async () => {
    try {
      const salonQuery = query(
        collection(db, "salons"),
        where("name", "==", salon)
      );
      const salonSnapshot = await getDocs(salonQuery);

      if (salonSnapshot.empty) {
        console.log("No salon found with the name:", salon);
        return;
      }
      for (const doc of salonSnapshot.docs) {
        const salonData = doc.data();
        setSalonData(salonData);

        const carouselQuery = query(
          collection(db, "carousel"),
          where("sal_id", "==", doc.ref)
        );
        const carouselSnapshot = await getDocs(carouselQuery);

        const carouselImages = [];
        if (carouselSnapshot.empty) {
          console.log("No carousel found with the name:", salon);
          return;
        }
        carouselSnapshot.forEach((carouselDoc) => {
          carouselImages.push(carouselDoc.data());
        });
        setCarouselData(carouselImages);

        const slotsQuery = query(
          collection(db, "slots"),
          where("ref_id", "==", doc.ref)
        );
        const slotsSnapshot = await getDocs(slotsQuery);
        const slots = [];
        if (slotsSnapshot.empty) {
          console.log("No slots found with the name:", salon);
          return;
        }
        slotsSnapshot.forEach((slotDoc) => {
          slots.push(slotDoc.data());
        });
        setSlotsData(slots[0]?.slot);
      }
    } catch (error) {
      console.error("Error fetching salon data:", error);
    }
  };

  useEffect(() => {
    getSalonData();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="#120E30"
        barStyle="light-content"
      />

      <SafeAreaView
        style={[
          { backgroundColor: "#120E30" },
          Platform.OS == "android" && { paddingBottom: 55 },
          Platform.OS == "ios" && { paddingBottom: 20 },
        ]}
      >
        <ScrollView className="h-full">
          <View>
            <Text className="text-xl text-[#d39da7] mr-4 font-bold">
              {salon}
            </Text>
            <View className="border-b-2 border-[#efb6c0]" />
          </View>
          <View className="h-72 max-w-[98%] mx-2 rounded-[25px]">
            <FlatList
              ref={flatListRef}
              data={
                Array.isArray(carouselData[0]?.images)
                  ? carouselData[0]?.images
                  : []
              }
              renderItem={carouselItem}
              horizontal
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              style={{ borderRadius: 25 }}
            />
          </View>
          <View className="flex-1 flex-row  mt-2 p-2 ">
            <Ionicons
              onPress={handleLocation}
              name="location-sharp"
              size={24}
              color="#d39da7"
            />
            <Text className="max-w-[75%] text-white">
              {salonData?.address} {"  \n"}
              <Text
                onPress={handleLocation}
                className="underline flex items-center mt-1 text-[#d39da7] text-semibold italic"
              >
                Get Directions
              </Text>
            </Text>
          </View>

          <View
            style={{ marginStart: "4" }}
            className="flex-1 flex-row p-2 "
          >
            <Ionicons
              name="time"
              size={20}
              color="#d39da7"
            />
            <Text className="max-w-[75%] mx-2 font-semibold text-white">
              {salonData?.opening} - {salonData?.closing}
            </Text>
          </View>
          <View className="flex-1 border m-2 p-2 border-[#d39da7] rounded-lg">
            <View className="flex-1 flex-row m-2 p-2 justify-end items-center">
              <View className="flex-1 flex-row">
                <Ionicons
                  name="calendar"
                  size={20}
                  color="#d39da7"
                />
                <Text className="text-white mx-2 text-base">
                  Select booking Date
                </Text>
              </View>
              <DatePickerComponent
                date={date}
                setDate={setDate}
              />
            </View>
            <View className="flex-1 flex-row bg-[##383650] rounded-lg m-2 p-2 justify-end items-center">
              <View className="flex-1 flex-row">
                <Ionicons
                  name="people"
                  size={20}
                  color="#d39da7"
                />
                <Text className="text-white mx-2 text-base">
                  Select number of clients
                </Text>
              </View>
              <GuestPickerComponent
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
              />
            </View>
          </View>
          <View className="flex-1">
            <FindSlots
              date={date}
              selectedNumber={selectedNumber}
              slots={slotsData}
              selectedSlot={selectedSlot}
              setSelectedSlot={setSelectedSlot}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
