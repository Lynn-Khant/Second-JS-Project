let nameError=document.getElementById('name-error');
const phoneError=document.getElementById('phone-error');
const emailError=document.getElementById('email-error');
const messageError=document.getElementById('message-error');
const submitError=document.getElementById('submit-error');
const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkinputs();
});

function checkinputs(){
    const contactnamevalue=document.getElementById('contact-name').value.trim();

    if(contactnamevalue===""){
        nameError.innerHTML="You must fill name"
    }else if(!contactnamevalue.match(/^[A-za-z]*\s{1}[A-Za-z]/)){
        nameError.innerHTML="You must enter full name"
    }else{
        nameError.innerHTML=''
        console.log(contactnamevalue)
    }
    
    
    const contactphnumbervalue=document.getElementById('contact-phnumber').value.trim();

    if(contactphnumbervalue===""){
        phoneError.innerHTML="You must fill a phone number"
    }else if(contactphnumbervalue.length<11){
        phoneError.innerHTML="Incorrect phone number "
    }else{
        phoneError.innerHTML=''
    }

    const contactemailvalue=document.getElementById('contact-email').value.trim();

    if(contactemailvalue===""){
        emailError.innerHTML="You must enter an email";

    }else if(!contactemailvalue.match(/^[a-z]/)){
        emailError.innerHTML="Incorrect email format"
    }else{
        emailError.innerHTML=""
    }

    const contactmsgvalue=document.getElementById('contact-msg').value.trim();
    if(contactmsgvalue===""){
        messageError.innerHTML="You must enter a message";
    }else if(contactmsgvalue<50){
        messageError.innerHTML="Message is short";
    }else{
        messageError.innerHTML="";
    }
}


