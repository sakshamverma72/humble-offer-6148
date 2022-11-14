document.querySelector(".login-top>img").addEventListener("click", function () {
    window.location.href = "./index.html";
});



document.querySelector("#details").addEventListener("submit", myfunction)


function myfunction(event) {
    event.preventDefault();
    let Name = document.querySelector("#detailname").value
    let password1 = document.querySelector("#pass1").value
    let password2 = document.querySelector("#pass2").value
    
    
    if (password1 === password2) {
        let password = password1
        let name = Name;
        localStorage.setItem("name", name)
        localStorage.setItem("details", password);
        window.location.href = "./login.html"
    }

    else {
        alert("Please check your password");
    }

}