let nickName = function(){
    console.log("두번째 문장을 실행합니다.")
}

let test = function(){
    console.log("test")
}
console.log("첫번째 문장을 실행합니다.")

setTimeout(nickName,2000)//비동기 방식 2000ms 뒤에 동작
setTimeout(test,1000)

console.log("세번째 문장을 실행합니다.")

