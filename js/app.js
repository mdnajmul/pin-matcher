function getPin(){
    const pinNumber = Math.round(Math.random()*10000);
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
    const pinInputField = document.getElementById('generate-pin-field');
    pinInputField.value = pin;
}

document.getElementById('keypad-numbers').addEventListener('click', function(event){
    console.log(event.target);
});