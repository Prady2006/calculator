var buttons = document.getElementsByClassName("button");
var display = document.getElementById('display');
var operand1 = 0 ;
var operand2 = null ;
var operator = null ;

for (var i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click',function() {
        var value = this.getAttribute('data-value');
        if (value != this.innerText){
            display.innerText = "nice one !!";
            return;
        }
        switch (value){
            case 'clear': 
                display.innerText = '';
                operand2 = operator = null;
                operand1 = 0;
            case '%':
                operator = '%';
                operand1 = parseFloat(display.innerText);
                if(typeof(operand1) == NaN){
                    display.innerText = "invalid number "
                    operand1 = 0;
                    break;
                }
                display.innerText = '';
                break;
            case '/':
                operator = '/';
                operand1 = parseFloat(display.innerText);
                if(typeof(operand1) == NaN){
                    display.innerText = "invalid number "
                    operand1 = 0;
                    break;
                }
                display.innerText = '';
                break;
            case '-':
                console.log("-");
                operator = '-';
                operand1 = parseFloat(display.innerText);
                if(typeof(operand1) == NaN){
                    display.innerText = "invalid number "
                    operand1 = 0;
                    break;
                }
                break;
            case '+': console.log("+");
                operator = '+';
                operand1 = parseFloat(display.innerText);
                if(typeof(operand1) == NaN){
                    display.innerText = "invalid number "
                    operand1 = 0;
                    break;
                }
                display.innerText = '';
                break;
            case '*':
                operator = '*';
                operand1 = parseFloat(display.innerText);
                if(typeof(operand1) == NaN){
                    display.innerText = "invalid number "
                    operand1 = 0;
                    break;
                }
                display.innerText = '';
                break;
            case '=': console.log("=");
                operand2 = display.innerText;
                if (operator == '/' && operand2 == 0){
                    display.innerText = "invalid operation";
                    break;
                }
                display.innerText = eval(operand1 + " " + operator + " " + operand2);
                opernand2 = operator = null ;
                operand1 = 0 ;
                break;
            default:
                display.innerText += value;
                break;
        }
    })
}