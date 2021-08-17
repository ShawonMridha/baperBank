function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = ' ';
    return amountValue;
}
function totalFiled(totalFiledId, newDepositAmount){
    const depositTotal = document.getElementById(totalFiledId);
    const previousDepositText =  depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
}

function newUpDate( newDepositAmount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
         balanceTotal.innerText = newBalanceTotal;
    }
    else{
        const newBalanceTotal = previousBalanceTotal - newDepositAmount;
         balanceTotal.innerText = newBalanceTotal;
    }
}

document.getElementById("deposit-button").addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
   const newDepositAmount = getInput('deposit-input');
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText =  depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepositTotal;
    totalFiled('deposit-total', newDepositAmount);
    // balance update
    
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    // depositInput.value = ' ';
    newUpDate(newDepositAmount,true);
})



document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat (withdrawAmountText);
    const newWithdrawAmount = getInput('withdraw-input')
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    totalFiled('withdraw-total', newWithdrawAmount);

    // updatebalance
    // const updatebalance = document.getElementById('balance-total');
    // const balanceText = updatebalance.innerText;
    // const newbalance =parseFloat (balanceText);
    // const newupdateBalance = newbalance - newWithdrawAmount;
    // updatebalance.innerText = newupdateBalance; 
    newUpDate(newWithdrawAmount,false)

    // withdrawInput.value = ' ';
})