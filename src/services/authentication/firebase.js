// firebase.js
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import Constants from "expo-constants";

const {
  ApiKey,
  AuthDomain,
  ProjectId,
  StorageBucket,
  MessagingSenderId,
  AppId,
  MeasurementId,
} = Constants.expoConfig.extra;

const firebaseConfig = {
  apiKey: ApiKey,
  authDomain: AuthDomain,
  projectId: ProjectId,
  storageBucket: StorageBucket,
  messagingSenderId: MessagingSenderId,
  appId: AppId,
  measurementId: MeasurementId,
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence for React Native
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  // Fallback to default getAuth
  auth = getAuth(app);
}

// Export for use in AuthenticationContext and anywhere else
export { auth, app };
