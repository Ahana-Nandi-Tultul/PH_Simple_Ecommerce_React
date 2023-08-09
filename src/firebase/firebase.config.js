// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHz01tUPFrYSXtFWaolmJZpTm6SuChMDA",
  authDomain: "ph-simple-ecommerce-react.firebaseapp.com",
  projectId: "ph-simple-ecommerce-react",
  storageBucket: "ph-simple-ecommerce-react.appspot.com",
  messagingSenderId: "386962473468",
  appId: "1:386962473468:web:32d6f38037aac7a2c93279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;