const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((it)=>{
        it.onclick=()=>{
            if(it.id=="clr"){
                display.innerText="";
            } 
            else if (it.id=="bs"){
                let string = display.innerText.toString();
                display.innerText=string.substr(0,string.length - 1);
            }
            else if (display.innerText!="" && it.id=="equal"){
                display.innerText=eval(display.innerText);
            }
            else if (display.innerText=="" && it.id=="equal"){
                display.innerText="Error! Add Values";
                setTimeout(()=>(display.innerText=""),2000);
            } 
            else{
                display.innerText+=it.id;
            }
            
        }
})


const togglebutton= document.querySelector(".ttoggler");
const calculator = document.querySelector(".calc");
const toggleicon=document.querySelector(".icontoggler");
let bedark=true;

togglebutton.onclick=()=>{
    calculator.classList.toggle("dark");
    togglebutton.classList.toggle("active");
    bedark= !bedark;
}