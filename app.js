const dollarForm=document.querySelector(".dollar-form");
const stForm=document.querySelector(".st-form");

const startButton=document.querySelector(".start");

const resetButton=document.querySelector(".reset");

let number=0;

 
 
const getDollar=()=>{

const dollarText=dollarForm.value;


    number=dollarText*100;
    stForm.value=number;



};

const reset=()=>{


dollarForm.value=null;

stForm.value=null;

};



startButton.addEventListener("click",()=>{
  getDollar();

});

resetButton.addEventListener("click",()=>{
  

reset();

 
});