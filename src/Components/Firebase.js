import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYH9fCfR5DUW0YHME8sdTo_Rdjad5YqBU",
  authDomain: "app-99228.firebaseapp.com",
  projectId: "app-99228",
  storageBucket: "app-99228.firebasestorage.app",
  messagingSenderId: "819897548735",
  appId: "1:819897548735:web:ed7ef47e67a4fb57d22b0a",
  measurementId: "G-NFF5HDF0S2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default { auth, provider };
