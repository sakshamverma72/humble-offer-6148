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

function firstpartdiv(){
    window.location.href="https://www.wrike.com/teams/professional-services-management/"
}
function secondpartdiv(){
    window.location.href="https://www.wrike.com/teams/professional-services-management/"
}
function thirdpartdiv(){
    window.location.href="https://www.wrike.com/teams/professional-services-management/"
}
function fourthpartdiv(){
    window.location.href="https://www.wrike.com/teams/professional-services-management/"
}