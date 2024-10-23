let username = ("Fly")
let email = ("star@.se")
let password = ("Sleepy555")
function isValidAccount(email, username, password) {
    return email.includes("@") ? true : false;
}

console.log(isValidAccount(email))
console.log(isValidAccount(username))
console.log(isValidAccount(password))

















 /*  let capletters = ("A...Z")
    let letters = ("a...z")
    let numbers = ("0...1000")
    let symbols = ("!, @, #, $, %, ^, &, *, (, ), -, _, +, =, {, }, [, ], :, ;, <, >, ., ,, ?, /, |, , `, ~ ")

 username.includes(capletters) ? true : false,
        password.substring(0, 8),
        password.includes(numbers, capletters, letters, symbols) ? true : false; */