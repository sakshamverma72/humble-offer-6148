

let passwordcheck = localStorage.getItem("details");
let customername = localStorage.getItem("name");
console.log(passwordcheck)
console.log(customername)

function passwordcheckdata() {

    console.log(passwordcheck);
    let password = document.querySelector("#passwordcheck").value;
    if (passwordcheck === password) {
        alert("Logged in successfully");
        window.location.href = "./index.html"
    }
    else {
        alert("Please check your password");
    }
}

