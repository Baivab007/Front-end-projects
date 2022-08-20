let scorehome= 0
let scoreguest=0
let home=document.getElementById("homescore")
let guest=document.getElementById("guestscore")
console.log(guest)
function onehome()
{
 scorehome += 1  
 home.textContent=scorehome
scorehome= scorehome
scorehome >= scoreguest
}
function twohome()
{
    scorehome +=2
    home.textContent=scorehome
    scorehome=scorehome
}
function threehome()
{
    scorehome +=3
    home.textContent=scorehome
    scorehome=scorehome
    
}

function guestone()
{
 scoreguest += 1  
 guest.textContent=scoreguest
scoreguest= scoreguest
}
function guesttwo()
{
    scoreguest +=2
    guest.textContent=scoreguest
    scoreguest=scoreguest
}
function guestthree()
{
    scoreguest +=3
    guest.textContent=scoreguest
    scoreguest=scoreguest
}
function reset()
{
    scoreguest=0
    scorehome=0
    home.textContent=scorehome
    guest.textContent=scoreguest
}
