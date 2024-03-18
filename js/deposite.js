//step-1 add event listener to the deposite button
document.getElementById('deposit-btn').addEventListener('click',function(){
   //step-2 get the deposite amount from the deposite input field
   const depositeField=document.getElementById('Deposite-input');
   const depositeAmountstring=depositeField.value;
   const depositeAmount=parseFloat(depositeAmountstring);

   //step-3 get the current deposite total

   const depositeTotalelement=document.getElementById('deposite-total');
   const preDepositestring=depositeTotalelement.innerText;
   const preDeposite=parseFloat(preDepositestring);
   const newdeposite=depositeAmount+preDeposite;
   depositeTotalelement.innerText=newdeposite;


   //step-4 Balance amount setup

   const balanceDeposit=document.getElementById('balance-amount');
   const balanceDepositeString=balanceDeposit.innerText;
   const balanceTotalDeposite=parseFloat(balanceDepositeString);

   const currentBalance=balanceTotalDeposite+depositeAmount;
   balanceDeposit.innerText=currentBalance;

   




   //step-7 deposote field clear 
   depositeField.value='';
})