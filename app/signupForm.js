import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { auth } from "./firebase.js"

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials);

        //Cerrar modal de Registro
        const signupModal = document.querySelector("#signupModal")
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

    } catch (error) {
        if(error.code === "auth/email-already-in-use"){
            alert("Correo ya en uso")
        }else if(error.code === "auth/invalid-email"){
            alert("Correo Inválido")
        }else if(error.code === "auth/weak-password"){
            alert("Contraseña Débil")
        }else if(error.code){
            alert("Algo salió mal")
        }
    }


})