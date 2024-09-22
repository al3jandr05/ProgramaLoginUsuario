import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js"
import { auth } from "./firebase.js"


const signinForm = document.querySelector("#login-form");

signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"))
        modal.hide()

        alert("Bienvenido "+credentials.user.email)

    } catch (error) {
        console.log(error);
        if(error.code === "auth/wrong-password" ){
            alert("Contraseña Incorrecta")
        }else if(error.code === "auth/user-not-found" ){
            alert("Usuario no encontrado")
        }else if (error.code === "auth/invalid-credential"){
            alert("Credenciales Incorrectas")
        }else{
            alert("Error"+ error)
        }
    }



})