"use strict";

var cookieString = 'cookie1=prova;';
var cookie2 ='cookie2=yet another test; expires=Sat, 5 May 2018 23:47:11 UTC; path=/';

//console.log(cookieString);
//document.onerror(alert("Error"));
//document.cookie = cookieString;

function button1Click()
{

    var emailObj = document.getElementById("EmailValue");

    var validationResult = emailObj.checkValidity();
    //alert(validationResult);
    console.log(emailObj.validationMessage);

    if(!emailObj.checkValidity())
    {
        document.getElementById("tit1").innerHTML = emailObj.validationMessage;
    }
    else
    {
        document.getElementById("tit1").innerHTML = "";
    }
    //alert(document.cookie);

    /*
    var i = 0;
    for(i=0;i<10;i++)
    {
        console.log("Il numero è " + i * 10);
    }

    var now = new Date();
    
    var expireTime = now.getTime() + 1000*36000;

    now.setDate(expireTime);

    var persona = {
        nome:"Luca",
        cognome:"Imola",
        fullname: function(){return this.nome + " " + this.cognome},
        json:function(){return '{"nome":"'+this.nome +'","cognome":"'+ this.cognome +'"}'}
    }

    alert(persona.json());
    var parsed = JSON.parse(persona.json());

    alert(parsed.nome);
    */
    //console.log(cookieString);
    //console.log("test 3");

}

