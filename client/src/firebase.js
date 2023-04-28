import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "video-ec815.firebaseapp.com",
  projectId: "video-ec815",
  storageBucket: "video-ec815.appspot.com",
  messagingSenderId: "854324061819",
  appId: "1:854324061819:web:b6a93edb29fc250a5d24de",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
