import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC1Pi-h31JJ50GjEqMwVraHCVsNSPRm-GA",
    authDomain: "e-ride-99b73.firebaseapp.com",
    projectId: "e-ride-99b73",
    storageBucket: "e-ride-99b73.appspot.com",
    messagingSenderId: "580536196871",
    appId: "1:580536196871:web:52cb8ab7830c2da54befa2"
};
//
firebase.initializeApp(firebaseConfig);



export default firebase.firestore();
