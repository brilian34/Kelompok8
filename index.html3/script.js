//membuat validasi login
function validasilogin(){
let user = document.getElementById('username').value;
let pass = document.getElementById('password').value;
     if(user==="admin"){}
     else{
       alert("username salah!");
       return true;
    }
     if(pass ==="123"){}
     else{
       alert("password salah!");
       return true;
    }  
    if(""){
    }else{
        alert("anda berhasil login!");
        return true;
    }
    
}