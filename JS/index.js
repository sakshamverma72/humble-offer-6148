document.querySelector("#nav1img").addEventListener("click", function () {
    window.location.href = "./index.html";
});

function changePage() {
    window.location.href = "./signup.html";
}

function main() {

    let input = document.querySelector("#firstemailinput").value
    if (input === "") {
        alert("Please enter a valid email address");
    }
    else {
        let email = input;
        localStorage.setItem("email", email);
        window.location.href = "./signup_2.html";
    }




}