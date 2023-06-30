import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnD0ZxNeHbhd-V-Npeml6sLUlc5T32trY",
  authDomain: "crowd-fund-882e7.firebaseapp.com",
  projectId: "crowd-fund-882e7",
  storageBucket: "crowd-fund-882e7.appspot.com",
  messagingSenderId: "145403706278",
  appId: "1:145403706278:web:30722c4854dc1e8055ad67",
  measurementId: "G-TM9KNRXT3W"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth,storage };
