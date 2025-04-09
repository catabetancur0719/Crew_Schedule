import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBSZCKVmfUvmopdoWsPDCLZ28PpiENLnig",
  authDomain: "crew-schedule-4c4ec.firebaseapp.com",
  projectId: "crew-schedule-4c4ec",
  storageBucket: "crew-schedule-4c4ec.firebasestorage.app",
  messagingSenderId: "608724920886",
  appId: "1:608724920886:web:1dbb992d00ccaf49900697",
  measurementId: "G-PZYDM1CFLS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };