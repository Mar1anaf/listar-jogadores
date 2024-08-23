// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJxITyqAOs2gkDvHVkFkEtKU-Dnzu-PiU",
  authDomain: "auth-firebase-mariana-aula1.firebaseapp.com",
  projectId: "auth-firebase-mariana-aula1",
  storageBucket: "auth-firebase-mariana-aula1.appspot.com",
  messagingSenderId: "281725623928",
  appId: "1:281725623928:web:6c4d764f8122253018178d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };  // Exporta a instância do Firestore
