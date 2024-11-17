import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Capturar el formulario
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Capturar valores de los campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validar que los campos no estén vacíos
  if (!name || !email || !phone) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    // Guardar los datos en Firestore
    await addDoc(collection(db, "Clientes"), { name, email, phone });
    alert("Datos enviados correctamente.");
    console.log("Datos enviados:", { name, email, phone });
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    alert("Hubo un error al enviar los datos. Inténtalo nuevamente.");
  }
});
