function showMsg()
{
    console.log("hello javascript")
}
showMsg();

function plus(a,b){//매개변수 초기화시 전달되는 매개변수의 우선순위가 높다
    console.log("sum of a,b="+(a+b))
}
plus(100,200)
// js는 interpreter 방식임 
plus(3.14,0.001592)
