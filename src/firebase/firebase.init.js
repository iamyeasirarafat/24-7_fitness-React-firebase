import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAp6BGBCf1P5qi1Ukb2dyl4CdUzKYbKw2g",
  authDomain: "fitness-5402c.firebaseapp.com",
  projectId: "fitness-5402c",
  storageBucket: "fitness-5402c.appspot.com",
  messagingSenderId: "763305129166",
  appId: "1:763305129166:web:c6b6d76f267c9b01348c9f"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;