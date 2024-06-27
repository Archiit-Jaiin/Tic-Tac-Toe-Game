window.addEventListener('load',bindEvents);
var buttons;
function bindEvents(){
    buttons=document.getElementsByTagName('button');
    console.log(buttons);
    for(var i=0; i<buttons.length; i++){
        var currentbutton=buttons[i];
        currentbutton.addEventListener('click',printXorZero); //Event Binding
        currentbutton.addEventListener('input',isGameOver);
    }
}
// Maintain a count to check if count goes >4 then check game over conditions
var counter=0;
function isGameOver(){
    if (counter>4) {
        if(((buttons[0].innerText==buttons[1].innerText)*(buttons[0].innerText==buttons[2].innerText))+((buttons[3].innerText==buttons[4].innerText)*(buttons[3].innerText==buttons[5].innerText))+((buttons[6].innerText==buttons[7].innerText)*(buttons[6].innerText==buttons[8].innerText))+((buttons[0].innerText==buttons[3].innerText)*(buttons[0].innerText==buttons[6].innerText))+((buttons[1].innerText==buttons[4].innerText)*(buttons[1].innerText==buttons[7].innerText))+((buttons[2].innerText==buttons[5].innerText)*(buttons[2].innerText==buttons[8].innerText))+((buttons[0].innerText==buttons[4].innerText)*(buttons[0].innerText==buttons[8].innerText))+((buttons[2].innerText==buttons[4].innerText)*(buttons[2].innerText==buttons[6].innerText))){
            console.log("Hi");
        }
        console.log(buttons);
    }
}
function reset(){

}
var flag=true;
function printXorZero(){
    if(this.innerText.trim().length==0){
        var buttonValue=flag?"X":"0";
        this.innerText=buttonValue; // <button> 0 </button>
        counter++;
        isGameOver();
        flag=!flag;
        //alert("U Click on Button");
    }
}
