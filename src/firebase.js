import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbDrZWQCcXmC0pDCUZoH_gc-JB4vIIsHs",
  authDomain: "team-jkf-dee30.firebaseapp.com",
  projectId: "team-jkf-dee30",
  storageBucket: "team-jkf-dee30.appspot.com",
  messagingSenderId: "408958231596",
  appId: "1:408958231596:web:5f58c2d21f6b90062b9d89",
  measurementId: "G-098JLMHKZC",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export { auth, provider };
