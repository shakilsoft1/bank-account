document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-input');
    const withdrawString=withdrawField.value;
    const withdrawAmount=parseFloat(withdrawString);

    const withdrawValue=document.getElementById('withdraw-value');
    const withdrawavlueString=withdrawValue.innerText;
    const withdrawtotal=parseFloat(withdrawavlueString);
    const newwithdrawAmount=withdrawAmount+withdrawtotal;
    withdrawValue.innerText=newwithdrawAmount;

   const balanceDeposit=document.getElementById('balance-amount');
   const balanceDepositeString=balanceDeposit.innerText;
   const balanceTotalDeposite=parseFloat(balanceDepositeString);

   const currentBalance=balanceTotalDeposite-withdrawAmount;
   balanceDeposit.innerText=currentBalance;









    withdrawField.value='';
})