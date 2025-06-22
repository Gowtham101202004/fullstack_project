function nameValidation(){
    var name = document.getElementById("name").value;
    var nameRegex = /^[a-zA-Z\s]+$/;
    if(nameRegex.test(name)){
        document.getElementById("nameCheck").innerHTML=""
        document.getElementById("nameCheck").style.height=""
    }
}
function nameValidation2(){
    var nameRegex = /^[a-zA-Z\s]+$/;
    var name = document.getElementById("name").value;
    if(name==""){
        document.getElementById("nameCheck").innerHTML="Please enter your name"
        document.getElementById("nameCheck").style.color="red"
        document.getElementById("nameCheck").style.fontWeight="bold"
        document.getElementById("nameCheck").style.textShadow="none"
        document.getElementById("nameCheck").style.height="25px"
    }
    else if(!nameRegex.test(name)){
        document.getElementById("nameCheck").innerHTML=`Invalid Name <span style="font-size: 13px";>(contains only alphabets)<span>`
        document.getElementById("nameCheck").style.color="red"
        document.getElementById("nameCheck").style.fontWeight="bold"
        document.getElementById("nameCheck").style.textShadow="none"
        document.getElementById("nameCheck").style.height="25px"
    }
}

function emailValidation(){
    var emailRegex = /^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,}$/
    var email = document.getElementById("email").value
    if(emailRegex.test(email)){
        document.getElementById("emailCheck").innerHTML=""
        document.getElementById("emailCheck").style.height=""
    }
}
function emailValidation2(){
    var emailRegex = /^[a-z0-9\.]+@[a-z0-9]+\.[a-z]{2,}$/
    var email = document.getElementById("email").value
    if(email==""){
        document.getElementById("emailCheck").innerHTML="Please enter your email id"
        document.getElementById("emailCheck").style.color="red"
        document.getElementById("emailCheck").style.fontWeight="bold"
        document.getElementById("emailCheck").style.textShadow="none"
        document.getElementById("emailCheck").style.height="25px"
        document.getElementById("email-label").innerHTML="email"
    }
    else if(!emailRegex.test(email)){
        document.getElementById("emailCheck").innerHTML="Invalid Email"
        document.getElementById("emailCheck").style.color="red"
        document.getElementById("emailCheck").style.fontWeight="bold"
        document.getElementById("emailCheck").style.textShadow="none"
        document.getElementById("emailCheck").style.height="25px"
        document.getElementById("email-label").innerHTML=""
    }
}

function phonenumberValidation(){
    var phone = document.getElementById("input-phone").value
    if(phone>=6000000000 && phone<=9999999999)
    {
        document.getElementById("phoneCheck").innerHTML=""
        document.getElementById("phoneCheck").style.height=""
    }
}
function phonenumberValidation2(){
    var phone = document.getElementById("input-phone").value
    if(phone==""){
        document.getElementById("phoneCheck").innerHTML="Please enter your phone number"
        document.getElementById("phoneCheck").style.color="red"
        document.getElementById("phoneCheck").style.fontWeight="bold"
        document.getElementById("phoneCheck").style.textShadow="none"
        document.getElementById("phoneCheck").style.height="25px"
    }
    else if(phone<=5999999999 || phone>=10000000000){
        document.getElementById("phoneCheck").innerHTML="Invalid Phone number"
        document.getElementById("phoneCheck").style.color="red"
        document.getElementById("phoneCheck").style.fontWeight="bold"
        document.getElementById("phoneCheck").style.textShadow="none"
        document.getElementById("phoneCheck").style.height="25px"
    }
}

function passwordValidation(){
    document.getElementById("toggleIcon").style.display="inline"
    var Password = document.getElementById("pass").value
    var upper = 0
    var lower = 0
    var num = 0
    var special = 0
    
    for(var i=0;i<Password.length;i++){
        var char = Password[i]
        if((char>='A') && (char<='Z')){
            upper++
        }
        else if((char>='a') && (char<='z')){
            lower++
        }
        else if((char>=0) && (char<=9)){
            num++
        }
        else {
            special++
        }
    }
    if((Password.length<8)||(Password.length>16)|| (upper==0)||(lower==0)||(num==0)||(special==0)){
        document.getElementById("char-len").innerHTML="Minimum 8 and Maximum 16 characters"
        document.getElementById("char-len").style.color="red"
        document.getElementById("char-len").style.textShadow="none"
        document.getElementById("char-len").style.height="25px"
        
        document.getElementById("char-case").innerHTML="Atleast one lower & uppercase"
        document.getElementById("char-case").style.color="red"
        document.getElementById("char-case").style.textShadow="none"
        document.getElementById("char-case").style.height="25px"
        
        document.getElementById("char-num").innerHTML="Atleast one number"
        document.getElementById("char-num").style.color="red"
        document.getElementById("char-num").style.textShadow="none"
        document.getElementById("char-num").style.height="25px"
        
        document.getElementById("char-special").innerHTML="Atleast one special character"
        document.getElementById("char-special").style.color="red"
        document.getElementById("char-special").style.textShadow="none"
        document.getElementById("char-special").style.height="25px"
    }
    if(Password==""){
        document.getElementById("toggleIcon").style.display="none"
    }
    if((Password.length>=8)&&(Password.length<=16)){
        document.getElementById("char-len").style.color="rgb(0, 255, 0)"
    }
    if((upper>=1)&&(lower>=1)){
        document.getElementById("char-case").style.color="rgb(0, 255, 0)"
    }
    if(num>=1){
        document.getElementById("char-num").style.color="rgb(0, 255, 0)"
    }
    if(special>=1){
        document.getElementById("char-special").style.color="rgb(0, 255, 0)"
    }
    if((Password.length>=8)&&(Password.length<=16)&&(upper>=1)&&(lower>=1)&&(num>=1)&&(special>=1)){
        document.getElementById("char-len").innerHTML=""
        document.getElementById("char-len").style.height="0"
        document.getElementById("char-case").innerHTML=""
        document.getElementById("char-case").style.height="0"
        document.getElementById("char-num").innerHTML=""
        document.getElementById("char-num").style.height="0"
        document.getElementById("char-special").innerHTML=""
        document.getElementById("char-special").style.height="0"

        document.getElementById("output").innerHTML="Strong Password"
        document.getElementById("output").style.transition="ease-in-out 0.8s"
        document.getElementById("output").style.color="rgb(0, 255, 0)"
        document.getElementById("output").style.textShadow="rgb(0, 255, 0) 0px 0px 20px"
        document.getElementById("output").style.height="35px"
    }
    else{
        document.getElementById("output").innerHTML=""
        document.getElementById("output").style.height="0"
    }
}

function togglePassword(){
    var password = document.getElementById("pass")
    var icon = document.getElementById("toggleIcon")
    if(password.type==="password"){
        password.type = "text"
        icon.className = "fa-solid fa-eye"
    }
    else{
        password.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}
function togglePassword2(){
    var password = document.getElementById("confirm-pass")
    var icon = document.getElementById("toggleIcon2")
    if(password.type==="password"){
        password.type = "text"
        icon.className = "fa-solid fa-eye"
    }
    else{
        password.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}

function confirmPassValidation(){
    document.getElementById("toggleIcon2").style.display="inline"
    var Password = document.getElementById("pass").value
    var ConfirmPassword = document.getElementById("confirm-pass").value
    if(ConfirmPassword==""){
        document.getElementById("toggleIcon2").style.display="none"
    }
    if(Password==""){
        document.getElementById("output").innerHTML="please enter the password"
        document.getElementById("output").style.color="red"
        document.getElementById("output").style.fontSize="14px"
        document.getElementById("output").style.textShadow="none"
        document.getElementById("output").style.height="40px"
    }

    if(ConfirmPassword.length>=Password.length){
        if(ConfirmPassword==Password)
            {
                document.getElementById("confirmPassCheck").innerHTML=""
                document.getElementById("confirmPassCheck").style.height=""
            }
        else{
            document.getElementById("confirmPassCheck").innerHTML="Password does not match"
            document.getElementById("confirmPassCheck").style.color="red"
            document.getElementById("confirmPassCheck").style.textShadow="none"
            document.getElementById("confirmPassCheck").style.height="15px"
        }
    }
}
function confirmPassValidation2(){
    var Password = document.getElementById("pass").value
    var ConfirmPassword = document.getElementById("confirm-pass").value
    if(ConfirmPassword.length<Password.length){
        document.getElementById("confirmPassCheck").innerHTML="Password does not match"
        document.getElementById("confirmPassCheck").style.color="red"
        document.getElementById("confirmPassCheck").style.textShadow="none"
        document.getElementById("confirmPassCheck").style.height="15px"
    }
    if((Password!="")&&(ConfirmPassword=="")){
        document.getElementById("confirmPassCheck").innerHTML="Please fill this field"
        document.getElementById("confirmPassCheck").style.color="red"
        document.getElementById("confirmPassCheck").style.textShadow="none"
        document.getElementById("confirmPassCheck").style.height="15px"
    }
    else if(ConfirmPassword==""){
        document.getElementById("confirmPassCheck").innerHTML=""
        document.getElementById("confirmPassCheck").style.height=""
    }
}