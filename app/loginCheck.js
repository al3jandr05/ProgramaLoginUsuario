const loggedOutLinks = document.querySelectorAll(".logged-out")
const loggedInLinks = document.querySelectorAll(".logged-in")

console.log(loggedInLinks);
console.log(loggedOutLinks);



export const loginCheck = user =>{
    if(user){
        loggedOutLinks.forEach(link => link.style.display = "none")
        loggedInLinks.forEach(link => link.style.display = "block")

    }else{
        loggedOutLinks.forEach(link => link.style.display = "block")
        loggedInLinks.forEach(link => link.style.display = "none")
    }
}