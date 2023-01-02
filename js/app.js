function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log("Pin is not a 4 digit so place try again!!", pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();

    document.getElementById('display-pin').value = pin;

}


document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = (event.target.innerText);
        const calcInput = document.getElementById('type-number');
        if (isNaN(number)) {
            if (number == "C") {
                calcInput.value = '';
            }
        }
        else {
            const previcesNumber = calcInput.value;
            const newNumber = previcesNumber + number;
            calcInput.value = newNumber;
        }


    });

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('type-number').value;
    const succesMessage = document.getElementById('notify-succes');
    const faildMessage = document.getElementById('notify-faild');
    if (pin == typeNumber) {
        succesMessage.style.display = 'block';
        faildMessage.style.display = 'none';
    }
    else {
        succesMessage.style.display = 'none';
        faildMessage.style.display = 'block';
    }
}