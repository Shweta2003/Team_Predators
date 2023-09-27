// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnT8vFE6MRB_TpjkzBz2bJ4RWQDkKQ6w8",
    authDomain: "team-predators.firebaseapp.com",
    projectId: "team-predators",
    storageBucket: "team-predators.appspot.com",
    messagingSenderId: "640211329320",
    appId: "1:640211329320:web:fae8eb825ee780fe00701d",
    measurementId: "G-0BWHBNSDSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
// const provider = new GithubAuthProvider()
const db = getFirestore(app)

export { db, auth, analytics }