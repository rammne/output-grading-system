// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

// Replace this config object with your actual Firebase configuration
// You can find this in your Firebase Console -> Project Settings -> General -> Your Apps -> SDK setup and configuration
const firebaseConfig = {
    apiKey: "AIzaSyD755gHzo3ygU_-sJeTBfD4ojDITCh1Sk0",
    authDomain: "crud-operation-js-ce264.firebaseapp.com",
    databaseURL: "https://crud-operation-js-ce264-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crud-operation-js-ce264",
    storageBucket: "crud-operation-js-ce264.firebasestorage.app",
    messagingSenderId: "1029829847088",
    appId: "1:1029829847088:web:faf7950db48840b8b1a5f5"
};

let db;

try {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firestore
    db = getFirestore(app);

    // Test Firestore connection
    console.log('Firebase and Firestore initialized successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
    alert('Error connecting to the database. Please check your Firebase configuration.');
}

export { db }; 