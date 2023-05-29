
//handle set interval with call back
const btn1=document.querySelector("#btn1");
let setTime;
btn1.addEventListener("click",()=>{
let stop=0;
  setTime= setInterval(()=>{
    console.log(stop);   
    stop++;
    console.log("Hello")
  },1000)
})


const btn2=document.querySelector("#btn2");
btn2.addEventListener("click",()=>{
clearInterval(setTime)
})

