function logintoAcc(e){
    event.preventDefault();

    let problemflag = 0;
    
    var uname = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    var numbr = document.getElementById('phone').value;
    let passfromls;
    let phonefromls;
    //username,email,password (egyusereshez kellett)
    //const userdataFromLS = JSON.parse(localStorage.getItem('user'));

    //console.log(userdataFromLS.username);
    //console.log(userdataFromLS.password);

    if(Object.entries(localStorage) != 0){
        //usernamecheck
        if(uname === ''){
            setErrorMessage(username, 'Ez a mező nem lehet üres!');
            problemflag=1;
        }else{
            var foundit = 0;
            for (let i = 0; i < localStorage.length; i++){
                const key = localStorage.key(i);
                if(uname === key){
                    setSuccessMessage(username);
                    problemflag=0;
                    udatafromLS = JSON.parse(localStorage.getItem(key));
                    passfromls = udatafromLS.password;
                    phonefromls = udatafromLS.phone;
                    //console.log(phonefromls);
                    foundit = 1;
                }
                if(foundit === 0){
                    setErrorMessage(username, 'Ilyen felhasználó nincs!');
                    problemflag=1;
                }
            }
        }
    }else{
        setErrorMessage(username, 'Még senki nem regisztrált az oldalra!');
    }
    //pwcheck
    if(pw === ''){
        setErrorMessage(password, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(pw != passfromls){
        setErrorMessage(password, 'Hibás jelszó');
        problemflag=1;
    }else{
        setSuccessMessage(password);
        problemflag=0;
    }

    //phonencheck
    if(numbr === ''){
        setErrorMessage(phone, 'Ez a mező nem lehet üres!');
        problemflag=1;
    }
    else if(numbr.length < 9){
        setErrorMessage(phone, 'Ez biztosan nem telefonszám!');
        problemflag=1;
    }
    else if(numbr != phonefromls){
        setErrorMessage(phone, 'Helytelen telefonszám!!');
        problemflag=1;
    }else{
        setSuccessMessage(phone);
        problemflag=0;
    }


    if(problemflag === 0){
        var currUser = {
            username: uname,
        };
        var json = JSON.stringify(currUser);
        localStorage.setItem('currUser', json);
        /*
        Logoutnál töröljük a currUser key-el rendelkező felhasználót localstorageből, így kvázi egy sessiont emulálunk vele.
        */
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        document.getElementById("phone").value="";

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

function isNumber(event){
    var character = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(character))){
        event.preventDefault();
    }
}