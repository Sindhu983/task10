const billAmount=document.querySelector("#bill-amount")
// console.log(billAmount)
const cashGiven=document.querySelector("#cash-given")
const checkBtn=document.querySelector("#check-button")
const message=document.querySelector("#error-message")
var noOfNotes=document.querySelectorAll(".no-of-notes")

const availableNotes=[2000,500,100,20,10,5,1]

checkBtn.addEventListener("click",function validateBillAndCashAmount(){
    hideMessage();
    message.style.display="none";
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned=cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }else{
            showMessage="the cash provided should atleast equal to the bill amount";

        }

    }else{
        showMessage="Invalid bill amount";
        
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i< availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display="none";
}
    



function showMessage(msg){
    message.style.display="block"
    message.innerText=msg;

}
