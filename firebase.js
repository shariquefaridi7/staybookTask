
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQNirXzvx2FYra9NND27XSEqdThI-igPo",
  authDomain: "hotlebooking-8cdd9.firebaseapp.com",
  projectId: "hotlebooking-8cdd9",
  storageBucket: "hotlebooking-8cdd9.appspot.com",
  messagingSenderId: "234194796232",
  appId: "1:234194796232:web:aaebf86fdcdbbdef5aaffd"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db};