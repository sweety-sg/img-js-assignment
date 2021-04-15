

function emailf(){
    var email = document.getElementById('email').value;
    var emailregex = /^\w[\w_.]*@[A-Za-z]+(\.[A-Za-z]+)+$/g ;
    if(emailregex.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
        return true;
    }
    else{
        document.getElementById('emailerror').innerHTML = "Email is invalid";
        return false;
    }
}

function pwdf(){
    var pwd = document.getElementById('pwd').value;
    var pwdregex= /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z\d.@$!%*#^?&]{8,}$/g;
    if(pwdregex.test(pwd)){
        document.getElementById('pwderror').innerHTML = " ";
        return true;
    
    }
    else{
        document.getElementById('pwderror').innerHTML = "Password is invalid. Your password should contain atleast 8 characters including atleast 1 alphabet and 1 digit";
        return false;
    }
}
function pwd2f(){
    var pwd = document.getElementById('pwd').value;
    var pwd2 = document.getElementById('pwd2').value;
    if(pwd2==pwd){
        document.getElementById('pwd2error').innerHTML =" ";
        return true;
    }
    else{
        document.getElementById('pwd2error').innerHTML = "Both passwords are different"
        return false;
    }
}
function phnf(){
    var phn = document.getElementById('phn-no').value;
    var phnregex = /(\+91?)?[0]?(91)?[6789]\d{9}/g;
    if(phnregex.test(phn)){
        document.getElementById('phnerror').innerHTML = " ";
        return true;
    }
    else{
        document.getElementById('phnerror').innerHTML = "Phone number is invalid.";
        return false;
    }
}






function process(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var pwd2 = document.getElementById('pwd2').value;
    var phn = document.getElementById('phn-no').value;
    var city = document.getElementById('city').value;
    
    if(name==""||age==""|| gender==""||email==""||pwd==""||pwd2==""||phn==""||city==""){
        document.getElementById('incomplete-error').innerHTML = "Kindly fill all the fields"
        return false;
    }
    else{
        document.getElementById('incomplete-error').innerHTML = ""
    }
    if(emailf()&&pwdf()&&pwd2f()&&phnf()==true){
        console.log('true');
        alert('sign-up successful');
        return true;
        
    }
    else{
        alert('sign-up error');
        console.log('false');
        return false;
        
    }

}






