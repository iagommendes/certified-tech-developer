console.log("JS Works!");

// select the form
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let img = document.querySelector("#img");
let usersContainer = document.querySelector("#users-container");
let submit = document.querySelector("#submit");

let users = [];

function addnewUser(name, email, img) {
    let newUser = {
        name: name,
        email: email,
        img: img
    };
    users.push(newUser);
    console.log(users);

    let newUserHTML = `
    <div class="user">
        <h3>${name}</h3>
        <p>${email}</p>
        <img src="${img}" alt="">
    </div>
    `;

    usersContainer.innerHTML += newUserHTML;
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    addnewUser(name.value, email.value, img.value);
    name.value = "";
    email.value = "";
    img.value = "";
});













