const button = document.querySelector("button")
const link = document.querySelector("a")
let pwd = document.querySelector("#pwd")
let pwdConfirm = document.querySelector("#pwdConfirm")
const errorMsg = document.querySelector(".errorMsg")
const logInMsg = document.querySelector(".logInMsg")

function validatePassword() {
    if (pwd.value != pwdConfirm.value) {
        pwdConfirm.style.cssText = "border-color: red;background-color: white;"
        errorMsg.textContent = "Passwords don't match"
        errorMsg.style.cssText = "color: red;"
        button.disabled = true
    } else if (pwd.value == pwdConfirm.value && pwd.value != ""){
        pwdConfirm.style.cssText = "border-color: green;background-color: #e5fbe1"
        errorMsg.style.cssText = "color: green;"
        errorMsg.textContent = "They match!"
        button.disabled = false
    } else if (pwd.value == "" && pwdConfirm.value == "") {
        errorMsg.textContent = ""
        pwdConfirm.style.cssText = "border-color: rgb(210, 210, 210)"
        button.disabled = false
    }
}

link.addEventListener('click', (e) => {
    alert("You can't log in because this isn't real and you can't create an account with something that doesn't exist.")
    e.preventDefault()
})
button.addEventListener('mouseover', validatePassword)
pwdConfirm.addEventListener('keyup', validatePassword)