import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from "./firebase.js";

const facebookButton = document.querySelector("#facebookLogin");

facebookButton.addEventListener("click", async () => {
    const provider = new FacebookAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector("#signinModal"));
        modal.hide();

        document.getElementById("userNameDisplay").innerText = "Has iniciado sesión con Facebook: " + credentials.user.displayName;

        Toastify({
            text: "Bienvenido " + credentials.user.displayName,
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        }).showToast();

    } catch (error) {
        console.log(error);
    }
});
    