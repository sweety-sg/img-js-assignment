function process(){
    var email= document.getElementById('email').value;
    var pwd= document.getElementById('pwd').value;
    var emailregex = /^\w[\w_.]*@[A-Za-z]+(\.[A-Za-z]+)+$/g ;
    var pwdregex= /^(?=.*[a-zA-Z])[a-zA-Z\d.@$!%*#?&]{8,}$/g;
    const url = "https://reqres.in/api/login";

    if(email==""||pwd==""||email==null||pwd==null){
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
        document.getElementById('pwderror').innerHTML = "Password is invalid. Your password should contain atleast 8 characters including atleast 1 alphabet";
        return false;
    }
    console.log('starting');
    // const formData = new FormData();
    // formData.append('email', email);
    // formData.append('password', pwd);
    // console.log(formData.get('email'));
 
   
  
    
    var info = {"email": email, "password": pwd};
    const xhr = new XMLHttpRequest();

    console.log(xhr.readyState);
    xhr.open("POST",url);
    console.log(xhr.readyState);
    xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    console.log(xhr.readyState);
    xhr.send(`email=${email}&password=${pwd}`);
    console.log(xhr.readyState);
   
    xhr.onreadystatechange= function(){
        console.log('ready state changing');
        if (this.readyState==4 && this.status===200) {
           let response = JSON.parse(this.response);
            console.log(response);
            alert("Login successful" + " ,response:" + response["token"]);
            
          } 
          else if( this.readyState==4 && this.status !=200){
              console.log(xhr.status);
              alert("login unsuccessful" + " error: "+ this.status);
          }
          
    }

    return true;
}