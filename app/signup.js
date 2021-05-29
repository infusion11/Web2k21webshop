function killAllTheSpaces(event){
    if(event.which == 32)
   {
      event.preventDefault();
      return false;
   }
}

function isNumber(event){
    var character = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(character))){
        event.preventDefault();
    }
}

function registration(e){
    event.preventDefault();

    var uname = document.getElementById('username').value;
    var mail = document.getElementById('email').value;
    var numbr = document.getElementById('phone').value;
    var pw = document.getElementById('password').value;
    var pwtwo = document.getElementById('passwordtwo').value;
    let problemflag = 0;

    for(var i =0; i < localStorage.length; i++){
        localStorage.getItem(localStorage.key(i));
    }

    //username
    if(uname === ''){
        setErrorMessage(username, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(uname === 'currUser'){
        setErrorMessage(username, 'Tiltott felhasználónév!');
        problemflag=1;
    }else{
        let duplication=0;
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if(uname === key){
                setErrorMessage(username, 'Foglalt név!');
                duplication=1;
                problemflag=1;
            }
        }
        if(duplication === 0){
            setSuccessMessage(username);
            problemflag=0;
        }
    }
    //mail
    if(mail === ''){
        setErrorMessage(email, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(!checkMail(mail)){
        setErrorMessage(email, 'Ez nem egy helyes email cím!');
        problemflag=1;
    }else{
        setSuccessMessage(email);
        problemflag=0;
    }
    //phone
    if(numbr === ''){
        setErrorMessage(phone, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(numbr.length < 9){
        setErrorMessage(phone, 'Ez biztosan nem telefonszám!');
        problemflag=1;
    }else{
        setSuccessMessage(phone);
        problemflag=0;
    }
    //pw
    if(pw === ''){
        setErrorMessage(password, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(!checkPw(pw)){
        setErrorMessage(password, 'Nem megfelelő erősségű a jelszó!');
        problemflag=1;
    }
    else if(pw.length < 8){
        setErrorMessage(password, 'A jelszó kevesebb, mint 8 karakter!');
        problemflag=1;
    }
    else if(pw.length > 16){
        setErrorMessage(password, 'A jelszó több, mint 16 karakter!');
        problemflag=1;
    }else{
        setSuccessMessage(password);
        problemflag=0;
    }
    //pw2
    if(pwtwo === ''){
        setErrorMessage(passwordtwo, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(pwtwo != pw){
        setErrorMessage(passwordtwo, 'Meg kell egyeznie a fenti jelszóval!');
        problemflag=1;
    }else{
        setSuccessMessage(passwordtwo);
        problemflag=0;
    }

    if(problemflag === 0){
        var user = {
            username: uname,
            email: mail,
            phone: numbr,
            password: pw,
        };
        var json = JSON.stringify(user);
        localStorage.setItem(uname, json);
        //console.log('added');

        var currUser = {
            username: uname,
        };
        var json = JSON.stringify(currUser);
        localStorage.setItem('currUser', json);
        
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("password").value="";
        document.getElementById("passwordtwo").value="";

        window.location="./home.html";
    }
}


function setErrorMessage(input,message){
    const formDivs = input.parentElement;
    const small = formDivs.querySelector('small');
    small.innerText = message;

    formDivs.className = 'formdivs error';
}

function setSuccessMessage(input){
    const formDivs = input.parentElement;
    formDivs.className = 'formdivs success';
}

function checkMail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function checkPw(password){
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/.test(password);
}

function eyeToggler(){
    var pwd = document.getElementById('password');
    var toggle = document.getElementById('togglePassword');
    if(pwd.type === "password"){
        pwd.type = "text";
        toggle.style.color = "red";
    }else{
        pwd.type = "password";
        toggle.style.color = "gray";
    }
}