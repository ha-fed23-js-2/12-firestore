// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBfYhcBAlOvnEVnQPrqZkHUpUC9sqn5JIc",
	authDomain: "ha-fed-23.firebaseapp.com",
	projectId: "ha-fed-23",
	storageBucket: "ha-fed-23.appspot.com",
	messagingSenderId: "640038849374",
	appId: "1:640038849374:web:d554e90d13ae8b53de1dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
