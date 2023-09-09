var lines = 7;
var str = " ";
var star = "*";
for (var i = 0; i < lines; i++) {
  str += star;
  console.log(str);
}


for (var j = 1; j <= 101; j++){
    if (j % 15 === 0)
    console.log("FillBuzz");
    else if (j % 3 === 0)
    console.log("fizz");
    else if (j % 5 === 0)
    console.log("buzz");
else console.log(j);
}


var slash = '*';
var space = ' ';
var result = '';
var row = true;
for (var i = 0; i < 8; i++) {
for (var j = 0; j < 8; j++) {
    if ((j+row) % 2 == 0) {
    result += space;
    } else {
    result += slash;
    }
}
console.log(result);
result='';
row = ! row;
}

const numbers = ['Алекс' , 'Анна', 'Олег']
numbers.push(1,2,3)