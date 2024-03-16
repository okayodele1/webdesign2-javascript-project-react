
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnCpCxUrFhV_mIoirl78m1NOxXhaBNumc",
  authDomain: "ngo-project-47762.firebaseapp.com",
  projectId: "ngo-project-47762",
  storageBucket: "ngo-project-47762.appspot.com",
  messagingSenderId: "159083664549",
  appId: "1:159083664549:web:d706eefe3cbe8785c9294c",
  measurementId: "G-89215CPJE9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth};