import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9x64tsAuaDASDKvoPL3AWzU7ER1BG_5g",
  authDomain: "teamjkf-app.firebaseapp.com",
  projectId: "teamjkf-app",
  storageBucket: "teamjkf-app.appspot.com",
  messagingSenderId: "465658307156",
  appId: "1:465658307156:web:cfa516201f4e1e2b3703c1",
  measurementId: "G-2CDJSPHLSD",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const fbProvider = new FacebookAuthProvider();
fbProvider.setCustomParameters({
  display: "popup",
});

export { auth, provider, fbProvider };
