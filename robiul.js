function myButton(){
    alert("This is best product")
}

function Robiul(){
    let paragraph = document.querySelector("#para");
    paragraph.innerHTML = "Thank You"
}
function oderButton(){
    let paragraph1 = document.querySelector("#Order");
    paragraph1.innerHTML = "Yes Your order accepected . But You Don't pay !"
}
function bangla(){
    let para4 = document.getElementById("bangla1");;
    para4.innerHTML = " You product is best ! "
}
function bangla5(){
    alert("Our product is best")
}

let form = document.querySelector("form");
let name = form.querySelector("div #name");
let email = form.querySelector("div #email");
let password = form.querySelector("div #password");

form.addEventListener("submit",myButton);
function myButton(event){
    event.preventDefault();
    let UserInfo = {
        name:name.value,
        email:email.value,
        password:password.value,
    }
    console.log(UserInfo)
    name.value= ""
    email.value= ""
    password.value = ""
}
