// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase';
// import { auth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBlqASiMFBZfa_QEZFwiCrzw9C3aNlP3WI",
//   authDomain: "ceramicaecommerce-872b5.firebaseapp.com",
//   projectId: "ceramicaecommerce-872b5",
//   storageBucket: "ceramicaecommerce-872b5.appspot.com",
//   messagingSenderId: "1092313155049",
//   appId: "1:1092313155049:web:afdba522e40208280af778"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig)

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// export const auth = firebase.auth();

// export {auth};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBlqASiMFBZfa_QEZFwiCrzw9C3aNlP3WI",
//   authDomain: "ceramicaecommerce-872b5.firebaseapp.com",
//   projectId: "ceramicaecommerce-872b5",
//   storageBucket: "ceramicaecommerce-872b5.appspot.com",
//   messagingSenderId: "1092313155049",
//   appId: "1:1092313155049:web:afdba522e40208280af778"
// };



// initializeApp(firebaseConfig);

// export const auth = firebase.auth(); 

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2023, 6, 21);
//     }
//   }
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/compat/auth';
// import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlqASiMFBZfa_QEZFwiCrzw9C3aNlP3WI",
  authDomain: "ceramicaecommerce-872b5.firebaseapp.com",
  projectId: "ceramicaecommerce-872b5",
  storageBucket: "ceramicaecommerce-872b5.appspot.com",
  messagingSenderId: "1092313155049",
  appId: "1:1092313155049:web:afdba522e40208280af778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };