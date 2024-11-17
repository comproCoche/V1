import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDmpfsYD2sXZXOT1YyOD5ODuK5b5OxXHlU",
  authDomain: "compro-coche.firebaseapp.com",
  projectId: "compro-coche",
  storageBucket: "compro-coche.firebasestorage.app",
  messagingSenderId: "619793404040",
  appId: "1:619793404040:web:1fef4dc7a2f946a9520f3d",
  measurementId: "G-N8NFFJGQ96"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
