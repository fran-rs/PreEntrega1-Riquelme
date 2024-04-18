
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDzkBMNqM_Wr9V5o6v2nRzuMol7b4_EG5I",
  authDomain: "coderhouse-ecommerce-9e9e5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-9e9e5",
  storageBucket: "coderhouse-ecommerce-9e9e5.appspot.com",
  messagingSenderId: "608840752203",
  appId: "1:608840752203:web:3a8380b15eb4295af0c1ce"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)