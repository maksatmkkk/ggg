const welcome = ('hello')
alert(welcome)
const name = prompt (
    'what is your name', 'UserName'
)
const LastName = prompt(
    'what is your Last Name ', 'LastName'
)
const Hello = `Hello, ${name} ${LastName}!`
alert(Hello)


var firstNumber, secondNumber;
firstNumber = +prompt('Введите число :');
secondNumber = parseInt(prompt('Введите второе чило :'));
if (firstNumber > secondNumber) {
    alert(firstNumber + 'Больше')
}else if(firstNumber < secondNumber){
    alert(secondNumber + 'больше')
}
else {
    alert('равны')
}


const color = prompt('With color :')
if ( color == 'red') {
    alert('stop');
}else if(color == 'yellow'){
    alert('wait');
}else if(color == 'green'){
    alert('go');
}else{
    alert('Not corect color');
}