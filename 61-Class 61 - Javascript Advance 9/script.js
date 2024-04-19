document.title = "Class 61"

let userName= document.querySelector("#username").value
let password= document.querySelector("#password").value
let form = document.querySelector("#myForm")
let bothFieldsError = document.querySelector("#bothFieldsError")
let unError = document.querySelector("#unError")
let pwdError = document.querySelector("#pwdError")

console.log(userName,password,form)

form.addEventListener("submit",function(e){
e.preventDefault()
if(userName===""){
    unError.innerText = "Username Is Must"
}else if(password===""){
    pwdError.innerText ="Password Is mUST"
}else {

    bothFieldsError.innerText="Please Fill Out Both Inputs"

}

})

