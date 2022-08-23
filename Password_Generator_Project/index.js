const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/"
];
// let copyEl1=document.getElementById("copy1")
// let copyEl2=document.getElementById("copy2")
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

function getRandomChar() {
    let index = Math.floor(Math.random() * characters.length);
    return characters[index];
}
function generateRandomPassword() {
    let randomPassword = "";
    for (let i = 0; i < 11; i++) {
        randomPassword += getRandomChar();
    }
    return randomPassword;
}


//for div2//
function getRandomCharForDiv2() {
    let index = Math.floor(Math.random() * characters.length);
    return characters[index];
}
function generateRandomPasswordForDiv2() {
    let randomPassword = "";
    for (let i = 0; i < 11; i++) {
        randomPassword += getRandomCharForDiv2();
    }
    return randomPassword;
}

function generatePassword() 
{
    div1.textContent = generateRandomPassword();
    div2.textContent = generateRandomPasswordForDiv2();
}
function copy1()
{
navigator.clipboard.writeText(div1.innerHTML)
alert("copied"+div1.innerHTML)
}
function copy2()
{
    navigator.clipboard.writeText(div2.innerHTML)
    alert("copied"+div2.innerHTML)
}