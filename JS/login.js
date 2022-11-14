document.querySelector(".login-top>img").addEventListener("click", function () {
    window.location.href = "./index.html";
});

let checkemail = localStorage.getItem("email");
console.log(checkemail);



function checklogindata() {
    let checkemail = localStorage.getItem("email");
    console.log(checkemail);
    let email = document.querySelector("#emailcheck").value;
    if(checkemail === email){
        window.location.href = "./password.html"
    }
    else{
        alert("Please check your email address");
    }
}