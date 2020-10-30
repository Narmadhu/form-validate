function validateName() {
let pipe=document.getElementById("pipeline-name").value;
let project=document.getElementById("project-name").value;
var bucket=document.getElementById("bucket-name").value;
var file=document.getElementById("file").value;
var credentials=document.getElementById("credentials").value;
var time=document.getElementById("time").value;

let pipeCheck = /^[a-zA-Z]{5,50}$/
let projectCheck = /^[a-zA-Z]{5,50}$/
let bucketCheck = /^[a-zA-Z]{5,50}$/
let fileCheck = /^[a-zA-Z]{5,50}$/
let credentialsCheck =/^[a-zA-Z]{5,50}$/
let timeCheck =/^[a-zA-Z]{5,50}$/

if (pipeCheck.test(pipe)) {
    document.getElementById("pipe-error").innerHTML=" "
}
else{
    document.getElementById("pipe-error").innerHTML="Minimum 5 Characters, Special Characters are not allowed"
    return false
} 

if (projectCheck.test(project)) {
    document.getElementById("project-error").innerHTML=""
}
else{
    document.getElementById("project-error").innerHTML="Minimum 5 Characters, Special Characters are not allowed"
    return false
} 
if (bucketCheck.test(bucket)) {
    document.getElementById("bucket-error").innerHTML=" "
}
else{
    document.getElementById("bucket-error").innerHTML="Minimum 5 Characters, Special Characters are not allowed"
    return false
} 
if (credentialsCheck .test(credentials)) {
    document.getElementById("credentials-error").innerHTML=" "
}
else{
    document.getElementById("credentials-error").innerHTML="Minimum 5 Characters, Special Characters are not allowed"
    return false
} 
if (timeCheck.test(time)) {
    document.getElementById("time-error").innerHTML=" "
}
else{
    document.getElementById("time-error").innerHTML="Minimum 5 Characters, Special Characters are not allowed"
    return false
} 

}











