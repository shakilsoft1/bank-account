//step-1 add click even handler with the submit button
document.getElementById('login').addEventListener('click',function(){
    //step-2 get the email address inside the email input field
    //always remember to use .value to get text fromm an input field
    const userEmail=document.getElementById('user-email');
    const email=userEmail.value;
    
    //step-3 get password
    const userPass=document.getElementById('user-pass');
    const password=userPass.value;
    
    //step-4 verify email and password
    if(email==="shakilfor76@gmail.com" && password==="shakil")
    {
        window.location.href='bank.html';
    }
    else{
        alert('Ivalied password');
    }
})