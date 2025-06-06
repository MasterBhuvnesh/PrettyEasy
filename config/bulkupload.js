import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { salons } from "../store/salons";

const salonData = salons;
const uploadData = async () => {
  try {
    for (let i = 0; i < salonData.length; i++) {
      const salon = salonData[i];

      // Reference the 'slots' collection and create a document for each slot
      const docRef = doc(collection(db, "salons"), `salon_${i + 1}`);
      await setDoc(docRef, salon);
    }
    console.log("Slots data uploaded successfully");
  } catch (error) {
    console.error("Error uploading slots data: ", error);
  }
};

export default uploadData;
