// Import SDK Firebase yang diperlukan (versi CDN agar mudah tanpa install npm)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, update, remove, child, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Konfigurasi Firebase Anda (PASTE DATA DARI FIREBASE CONSOLE DI SINI)
const firebaseConfig = {
  apiKey: "AIzaSyD9Izh6aWRVVVGHzxXbh7H5yjyWaYAYmdE",
  authDomain: "game-vaulty-app.firebaseapp.com",
  projectId: "game-vaulty-app",
  storageBucket: "game-vaulty-app.firebasestorage.app",
  messagingSenderId: "239695836220",
  appId: "1:239695836220:web:d64f5f62bf6fad025fff39"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Realtime Database
const database = getDatabase(app);

// Ekspor agar bisa digunakan di file seller.js dan customer.js
export { database, ref, set, get, update, remove, child, onValue };
