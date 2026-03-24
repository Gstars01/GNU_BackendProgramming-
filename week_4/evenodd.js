const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});
    //js에서 input/output control 하는 함수   매개변수 
rl.question('정수를 입력하세요. : ',function(num){ //function  :callblack function 
    num = num %2;                   // 익명함수 
    if(num){
        console.log("홀수")
    }
    else{
        console.log("짝수")
    }
    rl.close(); //process 
    //종료하지 않으면 프로그램 안끝남 
});