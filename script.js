function validateName() {
let source=document.getElementById("source").value
let pipe=document.getElementById("pipeline-name").value;
let project=document.getElementById("project-name").value;
let bucket=document.getElementById("bucket-name").value;
let file=document.getElementById("file").value;
let credentials=document.getElementById("credentials").value;
let time=document.getElementById("time").value;

let sourceCheck= /^[a-zA-Z0-9]{5,50}$/
let pipeCheck = /^[a-zA-Z0-9]{5,50}$/
let projectCheck = /^[a-zA-Z0-9]{5,50}$/
let bucketCheck = /^[a-zA-Z0-9]{5,50}$/
let fileCheck = /^[a-zA-Z0-9]{5,50}$/
let credentialsCheck =/^[a-zA-Z0-9]{5,50}$/
let timeCheck =/^[a-zA-Z0-9]{5,50}$/

if (sourceCheck.test(source)) {
    document.getElementById("source-error").innerHTML=" "
}
else{
    document.getElementById("source-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 


if (pipeCheck.test(pipe)) {
    document.getElementById("pipe-error").innerHTML=" "
}
else{
    document.getElementById("pipe-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 

if (projectCheck.test(project)) {
    document.getElementById("project-error").innerHTML=""
}
else{
    document.getElementById("project-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 
if (bucketCheck.test(bucket)) {
    document.getElementById("bucket-error").innerHTML=" "
}
else{
    document.getElementById("bucket-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 
if (fileCheck.test(file)) {
    document.getElementById("file-error").innerHTML=" "
}
else{
    document.getElementById("file-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 
if (credentialsCheck .test(credentials)) {
    document.getElementById("credentials-error").innerHTML=" "
}
else{
    document.getElementById("credentials-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 
if (timeCheck.test(time)) {
    document.getElementById("time-error").innerHTML=" "
}
else{
    document.getElementById("time-error").innerHTML="Form should have minimum of 5 characters, No special characters are allowed"
    return false
} 

}











