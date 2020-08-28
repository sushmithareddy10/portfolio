function formValidation()
{
var name= document.getElementById('name').value;
var email=document.getElementById('email').value;
var subject= document.getElementById('subject').value;
var message=document.getElementById('message').value;
if(name.length<1)
{
   document.getElementById('error-name').innerHTML='Enter your Name';
}
else{
   document.getElementById('error-name').innerHTML='';
}
if(email.length<1)
{
   document.getElementById('error-email').innerHTML='Enter your Email Address';
}
else{
   document.getElementById('error-email').innerHTML='';
}
if(subject.length<1)
{
   document.getElementById('error-subject').innerHTML='Enter the Subject';
}else{
   document.getElementById('error-subject').innerHTML='';
}
if(message.length<1)
{
   document.getElementById('error-message').innerHTML='Enter your message';
}else{
   document.getElementById('error-message').innerHTML='';
}

}