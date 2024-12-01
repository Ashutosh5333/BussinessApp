import Constants from "expo-constants";
import { initializeApp } from "firebase/app";

// Access Firebase configuration from app.json
const firebaseConfig = Constants.expoConfig.extra.firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
