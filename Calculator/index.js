let screen = document.getElementById('screen'); //return element by id screen

buttons = document.querySelectorAll('button'); //Get all elements in the document with button

// queryselector returns first element with that name

let screenValue = ''; //variable 
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        console.log('Button text is: ', buttonText)

        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue; //screen.value is value of screen
        }


        else if (buttonText == "=") {
                screen.value = eval(screenValue);

        }
            
        else if (buttonText == "C") {
                screenValue = " ";
                screen.value = screenValue;
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;

        }
        
    })
}