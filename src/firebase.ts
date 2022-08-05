import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsVJj3cUY-GAGYImGWiC-M_-jIjiKjJy8",
  authDomain: "mauricio-showcase.firebaseapp.com",
  projectId: "mauricio-showcase",
  storageBucket: "mauricio-showcase.appspot.com",
  messagingSenderId: "1026563516074",
  appId: "1:1026563516074:web:3510c52739a8279d3452d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);