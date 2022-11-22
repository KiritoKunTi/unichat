import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAGbbWAoj-9aHCfA_KgfZX5gVGCcELo8vA",
  authDomain: "unichat-c3086.firebaseapp.com",
  projectId: "unichat-c3086",
  storageBucket: "unichat-c3086.appspot.com",
  messagingSenderId: "827285914528",
  appId: "1:827285914528:web:ba574d3c88ee19c07edac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);