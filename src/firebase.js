// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAsIZdQNx3LxpM1rDxdDx8Bvlh2oL4qbaE",
    authDomain: "fiestallobito.firebaseapp.com",
    projectId: "fiestallobito",
    storageBucket: "fiestallobito.appspot.com",
    messagingSenderId: "779345969424",
    appId: "1:779345969424:web:e26bcb733907153c1a2595"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function textApp() {
    console.log("Conectado", app)
}