function CheckPassword(inputtxt) 
{ 
let inputValue = /^[A-Za-z0-9 ]+.{5,}$/
if(inputtxt.value.match(inputValue)) 
{ 
alert("Valid Input")
return true;
}
else
{ 
alert("Form should contain minimum 5 characters, no special characters are allowed, cannot start with '+','_','-'  ")
return false;
}
}

