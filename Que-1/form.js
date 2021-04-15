
function process(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var pwd2 = document.getElementById('pwd2').value;
    var phn = document.getElementById('phn-no').value;
    var city = document.getElementById('city').value;
    
    
    // var values = document.getElementsByTagName('input');
    // var ageregex = ;
    // var genderregex =;
    var emailregex = /^\w[\w_.]*@[A-Za-z]+(\.[A-Za-z]+)+$/g ;
    var pwdregex= /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d.@$!%*#?&]{8,}$/g;
    var phnregex = /^(\+91){0,1}\s{0,1}[6789]\d{9}$/g;
    // var cityregex = ;
    console.log("hi ");

if(name==""||age==""|| gender==""||email==""||pwd==""||pwd2==""||phn==""||city==""){
    document.getElementById('incomplete-error').innerHTML = "Kindly fill all the fields"
    return false;
}
else{
    document.getElementById('incomplete-error').innerHTML = ""
}


if(emailregex.test(email)){
    document.getElementById('emailerror').innerHTML = " ";
}
else{
    document.getElementById('emailerror').innerHTML = "Email is invalid";
    return false;
}

if(pwdregex.test(pwd)){
    document.getElementById('pwderror').innerHTML = " ";

}
else{
    document.getElementById('pwderror').innerHTML = "Password is invalid. Your password should contain atleast 8 characters including atleast 1 alphabet and 1 digit";
    return false;
}

if(pwd2==pwd){
    document.getElementById('pwd2error').innerHTML =" ";
}
else{
    document.getElementById('pwd2error').innerHTML = "Both passwords are different"
    return false;
}

if(phnregex.test(phn)){
    document.getElementById('phnerror').innerHTML = " ";
}
else{
    document.getElementById('phnerror').innerHTML = "Phone number is invalid.";
    return false;
}
}
// for(let i=0;i<10;i++){
//     var val= values[i].value;
// if(val==""){
//    alert('Fill all the fields');
   
// }
// }
