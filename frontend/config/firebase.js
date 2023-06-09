import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


//Firebase configuration
//Since all the security rules lives on firebase, it's safe to share API key for database
const firebaseConfig = {
  apiKey: "AIzaSyBX_6Uc9sDpS5FVaQGifuBumVMpLilIQbw",
  authDomain: "kartaca-auction.firebaseapp.com",
  projectId: "kartaca-auction",
  storageBucket: "kartaca-auction.appspot.com",
  messagingSenderId: "441776968576",
  appId: "1:441776968576:web:ed08be9b2173dc22426765",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//Login Function
const login = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

//Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return error;
  }
};

export { db, login, logout, auth };
