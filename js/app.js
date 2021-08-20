function getPin(){
    //generate random 4 digit number
    const pinNumber = Math.round(Math.random()*10000);
    //make number into string
    const pinString = pinNumber + '';
    if(pinString.length == 4){
        return pinNumber;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('generate-pin-field').value = pin;
}

document.getElementById('keypad-numbers').addEventListener('click', function(event){
    const typeInputField = document.getElementById('type-number-field');
    const typeNumber = event.target.innerText;
    if(isNaN(typeNumber)){
        if(typeNumber == 'C'){
            typeInputField.value = '';
            document.getElementById('success-message').style.display = 'none';
            document.getElementById('error-message').style.display = 'none';
        }
    }
    else{
        typeInputField.value = typeInputField.value + typeNumber;
    }
});


function verifyPin(){
    const typeInputField = document.getElementById('type-number-field');
    const generatePinInputField = document.getElementById('generate-pin-field');
    const successMessageField = document.getElementById('success-message');
    const errorMessageField = document.getElementById('error-message');
    if(typeInputField.value == generatePinInputField.value){
        successMessageField.style.display = 'block';
        errorMessageField.style.display = 'none';
    }
    else{
        successMessageField.style.display = 'none';
        errorMessageField.style.display = 'block';
    }
}