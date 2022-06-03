// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:"AIzaSyD6TXMEXcMrHPITihWCCCjI8Ah6BMi0mnA",
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId


  apiKey: "AIzaSyD6TXMEXcMrHPITihWCCCjI8Ah6BMi0mnA",
  authDomain: "tech-inventory-solution.firebaseapp.com",
  projectId: "tech-inventory-solution",
  storageBucket: "tech-inventory-solution.appspot.com",
  messagingSenderId: "976244879659",
  appId: "1:976244879659:web:f5fe58f2addb87cadb156e"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;