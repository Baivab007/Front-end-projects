let inputEl = document.getElementById('input-el');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for ( let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        inputEl.value= buttonText
        console.log('Button text is', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            inputEl.value = screenValue;
        }
        else if (buttonText == 'Reset') {
            screenValue = "";
            inputEl.value = screenValue;
        }
        else if (buttonText == '=') {
            inputEl.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            inputEl.value = screenValue;
        }

    })
}