function load(id){
    let url = 'https://reqres.in/api/users';
    var xhr =null;
    
        xhr = new XMLHttpRequest();
    
    if(xhr!= null){
        xhr.open("GET",url,true);
        
        xhr.send();
        
    }
    else{
        alert('You do not have a browser apt for this process')
    }

    xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status===200){
            console.log('hi');
            var array = JSON.parse(this.responseText);
            var arr = array.data;
            
            var out="";
            var i;
           
               for(i=0;i<arr.length;i++){
                
        //         out += '<a href="' + arr[i].avatar + '">' +
        //  '</a><br>'; 
             out+= arr[i].id+"<br>"+arr[i].first_name + " " +arr[i].last_name +"<br>" + arr[i].email +"<br>"+"<img src=\"" + arr[i].avatar + "\">" +
             "<br><br><br><br>";
        
           }
           
            
            document.getElementById(id).innerHTML = out;
        }
    }
}