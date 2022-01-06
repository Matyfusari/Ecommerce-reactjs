
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBaAsSsmdPs5s34yePqOqIeFNMiW63BfIE",
  authDomain: "handmade-style-bymarita.firebaseapp.com",
  projectId: "handmade-style-bymarita",
  storageBucket: "handmade-style-bymarita.appspot.com",
  messagingSenderId: "470101101940",
  appId: "1:470101101940:web:c55a801b80eba0e23ff021"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}