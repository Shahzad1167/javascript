//creating of object can  be using literals and constructor
//singleton object is created by constructor

//object by literals
const s= Symbol("key")
const jsuser={
    name:"shahzad",
    age:22,
    //symbol are used as key in this [] format 
    [s]:"mykey",
    "fullname":"Md Shahzad",
    email:"abc@gmail.com",
    islogin:false,
    lastlogin:["mon", "tue"]
}
console.log(jsuser);
console.log(jsuser.age);
console.log(jsuser["fullname"]);
console.log(jsuser.fullname);
console.log(jsuser[s]);

// CHANGE VALUE
jsuser.email="aaa@gamil.com"
console.log(jsuser);



//adding function

jsuser.greeting=function()
{
    console.log("hello shahzad")
}
console.log(jsuser.greeting())

//freeze

Object.freeze(jsuser)
jsuser.email="abc"
console.log(jsuser)