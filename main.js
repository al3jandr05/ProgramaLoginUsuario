import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import "./app/signupForm.js"     
import "./app/logout.js"
import "./app/signinForm.js"
import "./app/googleLogin.js"
import "./app/facebookLogin.js"
import { loginCheck}  from "./app/loginCheck.js"
import { auth } from "./app/firebase.js";


onAuthStateChanged(auth, async (user) => {

   loginCheck(user)
})
