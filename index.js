let username = prompt("your username")
let password = prompt("your password")


function isValidAccount(username, password) {
    if (password.lenght < 8){
        return false;
    } else if (password.includes (username)){
        return false;
    } else if (password.includes(" ")) {
        return false;
    } else {
        return true;
    }
}
console.log(isValidAccount(username))
console.log(isValidAccount(password))
















/*   let capletters = ("A...Z")
    let letters = ("a...z")
    let numbers = ("0...1000")
    let symbols = ("!, @, #, $, %, ^, &, *, (, ), -, _, +, =, {, }, [, ], :, ;, <, >, ., ,, ?, /, |, , `, ~ ")


return email.includes("@") ? true : false,
        username.includes(capletters) ? true : false,
        password.substring(0, 8),
        password.includes(numbers, capletters, letters, symbols) ? true : false;*/