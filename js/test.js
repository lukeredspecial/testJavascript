"use strict";

var cookieString = 'cookie1=prova;';
var cookie2 ='cookie2=yet another test; expires=Sat, 5 May 2018 23:47:11 UTC; path=/';

//console.log(cookieString);
//document.onerror(alert("Error"));
//document.cookie = cookieString;

function button3Click()
{
    //alert("1" - - "1");

    var myArr = ['foo', 'bar', 'baz'];
    myArr[2];
    var foo = "bar";

    var data = ["A", "B", "C", "D"];
    data.unshift("X");
    data.push("Y");
    data.concat("foo")

    //var x = parseInt("20 bar 30");

    
    var x = 1;
    console.log(x++ + ++x + x);

    var x1 = x++;
    console.log(x1);
    var x2 = ++x;
    console.log(x2);

    console.log(~-(2 + "2"));
    
    
    //alert(x1 + "  " + x2);
    //alert(Math.max());
    //alert(Math.min() < Math.max());
    
    //console.log('2' in myArr);


    var bar = 1,
        foo={};

        foo:{
            bar:2;
            baz: ++bar;
        };
        //alert(foo.baz + foo.bar + bar);

        //new Date()

    //console.log(new String("pippo") instanceof String);

    //alert(new Array(5).toString());

    //alert(new String("pippo") instanceof String);

    //console.log(document.getElementsByTagName("p"));

    //alert();
}

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

function button2Click()
{
    //console.log(document.getElementsByTagName("p"));

    var elementP = document.getElementsByTagName("p");
    var element;
    console.log(document.URL);
    var i = 0;
    for(i = 0; i< elementP.length; i++)
    {
        console.log(elementP[i].innerHTML);
    }
    //alert();
}


