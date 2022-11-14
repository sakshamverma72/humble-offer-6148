document.querySelector(".login-top>img").addEventListener("click", function () {
    window.location.href = "./index.html";
});


let Name = document.querySelector("input [type=text]").value
let password1 = document.querySelector("#pass1").value
let password2 = document.querySelector("#pass2").value
let action = document.querySelector("form").action
document.querySelector("#details").addEventListener("submit", myfunction)


function myfunction(event) {
    event.preventDefault();
    if (password1 === password2) {
        let details = {
            Name,
            password1,
        };
        localStorage.setItem("details", JSON.stringify(details));
        action = "./login.html"
    }

    else {
        alert("Please check your password");
    }

}