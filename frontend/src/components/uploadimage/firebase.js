// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIHEwcFp7Xlt9QM8bNktF4_LbzY2nefEM',
  authDomain: 'mernsters.firebaseapp.com',
  projectId: 'mernsters',
  storageBucket: 'mernsters.appspot.com',
  messagingSenderId: '23967042379',
  appId: '1:23967042379:web:eaa2d6ecce61bb463a76ce',
  measurementId: 'G-QNDDDFWEVR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
