// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV2wH5vF-zUTD95KsgshAbhp4yVuAEzfU",
  authDomain: "rohitportfolio-6e853.firebaseapp.com",
  projectId: "rohitportfolio-6e853",
  storageBucket: "rohitportfolio-6e853.appspot.com",
  messagingSenderId: "732998538126",
  appId: "1:732998538126:web:572dd7aaf2da81b1990adf",
  measurementId: "G-79YFSCPVPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);