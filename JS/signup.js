document.querySelector("#nav1img").addEventListener("click", function () {
    window.location.href = "./index.html";
});

function main() {

    let input = document.querySelector("input[type=email]").value
    if (input === "") {
        alert("Please enter a valid email address");
    }
    else {
        let email = input;
        localStorage.setItem("email", email);
        document.querySelector('.firstpart-2>button').addEventListener("click", function () {

            window.location.href = "./signup_2.html";
        });
    }
}