
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCoDD5dk9VhH5bK5Tx9-DgT55fVNQuuBMk",
  authDomain: "netflix-clone-fbb3e.firebaseapp.com",
  projectId: "netflix-clone-fbb3e",
  storageBucket: "netflix-clone-fbb3e.appspot.com",
  messagingSenderId: "1025056722088",
  appId: "1:1025056722088:web:029692572e8e9fafd9069d",
  measurementId: "G-SV0MH6SZX2"
};

const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
export const auth = getAuth(app);