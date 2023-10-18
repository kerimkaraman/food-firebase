import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAatjcwvKR1-nrdjkZZXtIIitO7BczBOf4",
  authDomain: "food-app-bf17f.firebaseapp.com",
  databaseURL: "https://food-app-bf17f-default-rtdb.firebaseio.com",
  projectId: "food-app-bf17f",
  storageBucket: "food-app-bf17f.appspot.com",
  messagingSenderId: "788930988220",
  appId: "1:788930988220:web:df07df1e18b946a49568b9",
};

export const APP = initializeApp(firebaseConfig);
export const AUTH = getAuth(APP);
export const database = getDatabase(APP);
