
function contactUs(){
    let element=document.getElementById("contactId");
    element.textContent="Mob_No:9988445566";
    element.style.color="blue";
    console.log(element);
}


let inputElement=document.getElementById("fname");
let orderedButton=document.getElementById("signIn");

function order(){
    let inputValue=inputElement.value;
    let verifyText="Congratulations "+ inputValue + ", You order is Confirmed...";
    orderedButton.textContent=verifyText;
    orderedButton.style.color="green";
}
