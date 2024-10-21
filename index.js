let username= ("Fly")
let email = ("star@.se")
let password= ("Sleepy555")

function isValidEmail(email){
    return email.includes("@") ? ture : false;
}
function isValidUsername(username){
    return username.includes("A...Z") ? ture : false;
}
function isValidPassword(password){
    password.substring(0,8)
    return password.includes("0...1000", "A...Z","a...z" , "!, @, #, $, %, ^, &, *, (, ), -, _, +, =, {, }, [, ], :, ;, <, >, ., ,, ?, /, |, , `, ~ ") ? ture : false;

}
console.log(isValidEmail(email))
console.log(isValidUsername(username))
console.log(isValidPassword(password))
