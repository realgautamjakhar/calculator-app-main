const displaytext = document.getElementById("display-text");
const onebtn = document.querySelector(".one")
const twobtn = document.querySelector(".two")
const threebtn = document.querySelector(".three")
const fourbtn = document.querySelector(".four")
const fivebtn = document.querySelector(".five")
const sixbtn = document.querySelector(".six")
const sevenbtn = document.querySelector(".seven")
const eightbtn = document.querySelector(".eight")
const ninebtn = document.querySelector(".nine")
const zerobtn = document.querySelector(".zero")
const decimalbtn = document.querySelector(".decimal")
const resetbtn = document.querySelector(".reset")
const equalsbtn = document.querySelector(".equals")
const addbtn = document.querySelector(".addbtn")
const subtractbtn = document.querySelector(".subtractbtn")
let oprandone = null;
let oprandtwo = null;
let operator = null;
onebtn.addEventListener("click",displayNumber)
twobtn.addEventListener("click",displayNumber)
threebtn.addEventListener("click",displayNumber)
fourbtn.addEventListener("click",displayNumber)
fivebtn.addEventListener("click",displayNumber)
sixbtn.addEventListener("click",displayNumber)
sevenbtn.addEventListener("click",displayNumber)
eightbtn.addEventListener("click",displayNumber)
ninebtn.addEventListener("click",displayNumber)
zerobtn.addEventListener("click",displayNumber)
decimalbtn.addEventListener("click",displayNumber)

resetbtn.addEventListener("click",clearDisplay)
equalsbtn.addEventListener("click",showresult)
addbtn.addEventListener("click",addinput)
subtractbtn.addEventListener("click",subtractinput)

function clearDisplay(){
    document.querySelector(".reference").innerHTML = ""
    displaytext.innerHTML = "";

    oprandone = null;
    oprandtwo = null;
    operator = null;
}

function displayNumber(event){
    if((displaytext.innerHTML).length < 10){
        displaytext.innerHTML += event.target.value;
        document.querySelector(".reference").innerHTML += event.target.value;
    }
    else{
        alert("only 10 inputs supported")
    }
}

function addinput(){

    if (operator === null) {
        displaytext.innerHTML += event.target.value;
        operator = event.target.value;
        document.querySelector(".reference").innerHTML += event.target.value
        oprandone = parseFloat(displaytext.innerHTML)
        displaytext.innerHTML = "";
        console.log(oprandone)
    }else{
        alert("only one operator")
    }
}
function subtractinput(){
    if (operator === null) {
        displaytext.innerHTML += event.target.value;
        operator = event.target.value;
        oprandone = parseInt(displaytext.innerHTML)
        console.log(oprandone)
    }else{
        alert("only one operator")
    }
}
function showresult(){

    oprandtwo = parseInt(displaytext.innerHTML)
    if(operator == "+"){
        let resultaa = oprandone + oprandtwo;
        console.log(oprandone,oprandtwo);
        // displaytext.innerHTML = "";
        displaytext.innerHTML = resultaa;
        console.log((resultaa));
    }


}
document.addEventListener("DOMContentLoaded",function(){


})