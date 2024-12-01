// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import  {getFirestore} from "firebase/firestore"
import { initializeApp } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHGMqQJe6SuvDgdHwzNLokJpO9Zgs51jU",
  authDomain: "bussiness-app-c7d0c.firebaseapp.com",
  projectId: "bussiness-app-c7d0c",
  storageBucket: "bussiness-app-c7d0c.firebasestorage.app",
  messagingSenderId: "804117815305",
  appId: "1:804117815305:web:08949d6c062538e40098d8",
  measurementId: "G-D24TDY09NQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)

