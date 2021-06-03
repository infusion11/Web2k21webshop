function isNumber(event){
    var character = String.fromCharCode(event.which);
    if(!(/[0-9]/.test(character))){
        event.preventDefault();
    }
}

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if(JSON.parse(localStorage.getItem("currUser")).username === key){
        var udatafromLS = JSON.parse(localStorage.getItem(key));
        console.log(udatafromLS);
        var emailfromls = udatafromLS.email;
        var fullnamefromls = udatafromLS.fullname;
        var telfromls = udatafromLS.phone;
        var pw = udatafromLS.password;
        var zipfromls = udatafromLS.zip;
        var    cityfromls = udatafromLS.city;
        var    szal_addressfromls = udatafromLS.szal_address;
        var    szam_addressfromls = udatafromLS.szam_address;
        
}}
console.log(udatafromLS.username);
document.getElementById('username').innerHTML=udatafromLS.username;
document.getElementById('email').value=udatafromLS.email;
if(typeof(udatafromLS.fullname) == 'undefined'){
    document.getElementById('fullname').value="";
}
else{
    document.getElementById('fullname').value=udatafromLS.fullname;
}
if(typeof(udatafromLS.phone) != 'undefined'){
    document.getElementById('tel').value=udatafromLS.phone;
}
else{
    document.getElementById('tel').value="";
}
if(typeof(udatafromLS.zip) == 'undefined'){
    document.getElementById('zip').value="";
}
else{
    document.getElementById('zip').value=udatafromLS.zip;
}
if(typeof(udatafromLS.city) == 'undefined'){
    document.getElementById('city').value="";
}
else{
    document.getElementById('city').value=udatafromLS.city;
}
if(typeof(udatafromLS.szal_address) == 'undefined'){
    document.getElementById('szal_address').value="";
}
else{
    document.getElementById('szal_address').value=udatafromLS.szal_address;
}
if(typeof(udatafromLS.szam_address) == 'undefined'){
    document.getElementById('szam_address').value="";
}
else{
    document.getElementById('szam_address').value=udatafromLS.szam_address;
}
    
    function modify(e){
        event.preventDefault();
    

    var username = document.getElementById('username').innerHTML;
    var email = document.getElementById('email').value;
    var fullname = document.getElementById('fullname').value;
    var tel = document.getElementById('tel').value;
    var zip = document.getElementById('zip').value;
    var city = document.getElementById('city').value;
    var szal_address = document.getElementById('szal_address').value;
    var szam_address = document.getElementById('szam_address').value;

    for(var i =0; i < localStorage.length; i++){
        localStorage.getItem(localStorage.key(i));
    }

    var user ={"username" : udatafromLS.username, "phone" : tel, "password" : pw};
    //Teljes Név
    if(fullname === ''){
        document.getElementById('fullnameerror').innerHTML="Nem adott meg értéket!"
        user['fullname']=udatafromLS.fullname;

    }
    else{
       user['fullname']=fullname;
       document.getElementById('fullnameerror').innerHTML=""
    }

    //email
    if(email === ''){
        document.getElementById('emailerror').innerHTML="Nem adott meg értéket!"
        user['email']=udatafromLS.email;

    }
    else if(!checkMail(email)){
        document.getElementById('emailerror').innerHTML="Nem helyes az e-mail cím formátuma!"
        user['email']=udatafromLS.email;
    }else{
        user['email']=email;
        document.getElementById('emailerror').innerHTML=""
    }
    //tel
    if(tel === ''){
        document.getElementById('telerror').innerHTML="Nem adott meg értéket!"
        user['tel']=udatafromLS.phone;
    }
    else if(tel.length == 9){
        user['tel']=tel;
       document.getElementById('telerror').innerHTML=""
    }else{
       document.getElementById('telerror').innerHTML="Nem helyes a megadott telefonszám!"
        user['tel']=udatafromLS.phone;
    }
    //zip
    if(zip ===''){
        document.getElementById('ziperror').innerHTML="Nem adott meg értéket!"
        user['zip']=udatafromLS.zip;
    }
    else if(zip.toString().length==4){
        console.log(zip.toString().length)
         user['zip']=zip;
         document.getElementById('ziperror').innerHTML=""
        
    }
    else{
       document.getElementById('ziperror').innerHTML="Nem jó értéketadott meg!"
       user['zip']=udatafromLS.zip;
    }

    //város
    if(city ===''){
        document.getElementById('cityerror').innerHTML="Nem adott meg értéket!"
        user['city']=udatafromLS.city;
    }
    else{
        user['city']=city;
        document.getElementById('cityerror').innerHTML=""
    }
    if(szal_address ===''){
        document.getElementById('szal_addresserror').innerHTML="Nem adott meg értéket!"
        user['szal_address']=udatafromLS.szal_address;
    }
    
    else{
        user['szal_address']=szal_address;
        document.getElementById('szal_addresserror').innerHTML=""
    }
    if(szam_address ===''){
        document.getElementById('szam_addresserror').innerHTML="Nem adott meg értéket!"
        user['szam_address']=udatafromLS.szam_address;
    }
    
    else{
        user['szam_address']=szam_address;
        document.getElementById('szam_addresserror').innerHTML=""
    }

       
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);

        console.log(user);





        var currUser = {
            "username" : username,
        };
        var json = JSON.stringify(currUser);
        localStorage.setItem('currUser', json);
    }



function checkMail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
