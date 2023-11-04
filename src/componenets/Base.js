import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWIFoky8XobgY2_vYapkmyGhL_dg_-QQQ",
  authDomain: "doctorapp-a9ac7.firebaseapp.com",
  projectId: "doctorapp-a9ac7",
  storageBucket: "doctorapp-a9ac7.appspot.com",
  messagingSenderId: "275449925847",
  appId: "1:275449925847:web:bbef3242d8f6d9cf342092",
  measurementId: "G-CX6XLE74N3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
