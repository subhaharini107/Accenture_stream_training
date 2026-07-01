let count=1;

function check(){
    let pass=document.getElementById("password").value;
    if(count<3){  
        if(pass==="pass123"){
        alert("success");
    }else{
        alert("fail attempts availavle: "+(3-count));
        count++;
    }  
    }else{
    alert("Account Locked");
    }
    
}