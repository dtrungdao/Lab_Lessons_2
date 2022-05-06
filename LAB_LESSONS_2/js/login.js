let sum = 10 + 60;

console.log(sum);

//document.body.innerHTML = "hello world"


function loginFunction(){
    let pwd = document.getElementById("password").value;
    let username = document.getElementById("text").value;
    console.log(username)
    console.log(pwd)

    if(pwd === "Admin" || username === "Admin"){
        alert("LOGIN SUCCESS");
    }else{
        alert("LOGIN FAILED");
    }
    
    

}