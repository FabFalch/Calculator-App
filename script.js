
    /* Establishing Elements */
    const dot = document.getElementById('dot');
    const CalScreen = document.querySelector('.screen');
    const Buttons = document.querySelectorAll('.cal-btn');
    const decimalBtn = document.getElementById('decimal-btn');
    
    const plusBtn = document.getElementById('plus-btn');
    const minusBtn = document.getElementById('minus-btn');
    const divideBtn = document.getElementById('divide-btn');
    const multiplyBtn = document.getElementById('multiply-btn');
    
    const resetBtn = document.getElementById('reset-btn');
    const deleteBtn = document.getElementById('del-btn');
    const equalsBtn = document.getElementById('equals-btn');
    
    const themeLink = document.getElementById('theme-link');

    /* Theme Changer */
    const themes = {
        1: "Styles - Themes/Theme1.css",
        2: "Styles - Themes/Theme2.css",
        3: "Styles - Themes/Theme3.css"
    };
    
    let position = 1;
    themeLink.href = themes[position];
    
    dot.addEventListener('click', () => {
        position = (position % 3) + 1;
        themeLink.href = themes[position];
    });

    /* Calculator Logic */
    CalScreen.textContent = "0";

    let currentValue = "";
    let previousValue = "";
    let operatorType = "";


    Buttons.forEach(button => {
        button.addEventListener('click',() => {
            if (CalScreen.textContent === '0') {
                currentValue = button.textContent
                CalScreen.textContent = currentValue
            }
            else {
                currentValue += button.textContent
                CalScreen.textContent = currentValue;
                
            }
            console.log(`CurrentValue: ${currentValue}`)
        })
     

});

const operators = [plusBtn, minusBtn, divideBtn, multiplyBtn];

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (currentValue === '') return;
        else {
            previousValue = currentValue;
            operatorType = operator.textContent;
            currentValue = '';
            console.log(`Previous Value: ${previousValue}`)
            console.log(`Operator Selected: ${operatorType}`)
            console.log(`Current Value: ${currentValue}`)
        };
        
    })
    
    
})

equalsBtn.addEventListener('click', () => {
    if (!currentValue || !previousValue || !operatorType ) return; 
    else {
        let num1 = parseFloat(previousValue);
        let num2 = parseFloat (currentValue);

        let result
        switch (operatorType) {
        case '+': 
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case 'x': 
             result = num1 * num2;
             break;

        case '/':
            result = num2 !== 0 ? num1/num2 : `Error, can't divide by zero`;
            break;
            
        

        };

    CalScreen.textContent = result;
    currentValue = result.toString(); 
    previousValue = ""; 
    operatorType = ""; 

    console.log(`Result: ${result}`);
        


    }
})

deleteBtn.addEventListener('click', () => {
    if (currentValue.length > 1) {
        currentValue = currentValue.slice(0 , -1);
    } else {
        currentValue = '0'
    }
    console.log(`Current Value: ${currentValue}`)
    CalScreen.textContent = currentValue;
});

resetBtn.addEventListener('click', () => {
    CalScreen.textContent = "0";

     currentValue = "";
     previousValue = "";
     operatorType = "";

})

decimalBtn.addEventListener('click', () => {
    if (currentValue.includes('.')) return; 
    if (currentValue === '') {
        currentValue = '0.'
    } else {
        currentValue += '.'
    }

    CalScreen.textContent = currentValue;
        
    
})