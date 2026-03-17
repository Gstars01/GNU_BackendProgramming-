var nan = '난'/10;
console.log(nan);
// nan = not a number

var lang1 = 'java';
var lang2 = 'script';
var number = '01';
console.log(lang1+lang2+number);
//javascript에서 문자열 더하기 연산

var msg = "nodejs is the just opensource js runtime environment";
console.log(msg.length);
//문자열 길이 카운팅

//boolean 
var bigger = 100 > 50;
console.log(bigger); //true
var bigger = 100 < 50;
console.log(bigger);//false

//null & undefined
var empty = null;
console.log(empty); //null
console.log(Boolean(empty)); //출력 : false , 형변환(boolean)

//object type
//array + collection + object class 
//dynamic memory 

//object == almost like python dict
//but all of key == string (in nodejs) 
var msg= {
    name : 'david',
    comment : "he's dead",
    age : 19
};

//array
var array =new Array(); //memory allocation keyword
array.push(msg);

console.log(array);

