// REGEX 
// https://www.codexpedia.com/regex/regex-symbol-list-and-regex-examples/


function validateLogin(){
    var Username = document.getElementById("username").value;
    var Password = document.getElementById("password").value;

    //Email/Username Field
    
    re3 = /[-!$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
    if(Username === ""){
        document.getElementById("div1").innerHTML="Enter a value";
        document.getElementById("div1").style.color="Red";
        document.getElementById("username").style.border="1px solid #EE2737";        
    }else if(re3.test(Username)){
        document.getElementById("div1").innerHTML="Username should have only letters, numbers and underscores or ( . )";
        document.getElementById("div1").style.color="Red";
        document.getElementById("username").style.border="1px solid #EE2737";
    }else{
        document.getElementById("div1").innerHTML="";
        document.getElementById("username").style.background="#fff";
        document.getElementById("username").style.border="1px solid #B49581";
    }

    //Password Field
    re2 = /[0-9]/;
    re4 = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    if(Password == ""){
        document.getElementById("div2").innerHTML="Enter a value";
        document.getElementById("div2").style.color="Red";
        document.getElementById("password").style.border="1px solid #EE2737";
    }else{
        document.getElementById("div2").innerHTML="";
        document.getElementById("password").style.background="#fff";
        document.getElementById("password").style.border="1px solid #B49581";
    }
}

var attempt = 3;

function validateLoginButton(){
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    re5 = /[0-9]/;
    if(un == "user" && pw == "User123."){
        alert('Login Successfully');
        window.location = "../HomePage/homePage.html"
        return false;
    }else if(pw.length<6){
        document.getElementById("div2").innerHTML="Passwrod value should have 6+ characters";
        document.getElementById("div2").style.color="Red";
        document.getElementById("password").style.border="1px solid #EE2737"; 
    }else if(pw === pw.toLowerCase()){
        document.getElementById("div2").innerHTML="One letter should be Uppercase";
        document.getElementById("div2").style.color="Red";
        document.getElementById("password").style.border="1px solid #EE2737";
    }else{
        attempt --;// Decrementing by one.
        alert("Wrong username or password, you have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if(attempt == 0){
            alert("Refresh the page and try username value = \"user\" and password value = \"User123.\"")
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

function showPasswordLogIn() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}