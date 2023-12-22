//if
const user1= {
    username:"sumantra",
    age:18,
    email:"adityakumar"
}
const user2= {
    username:"sumantra",
    age:17,
    email:"adityakumar"
    
}
console.log(user1)
console.log(user2)
//age checking

const age=45;
if(age<=18){   //<,>,<=,>=,==,!=
    console.log("user is vaild for login")
}
else{
    console.log("user have not vaild age ")
}
//by === is also check type
if(2==="2"){
    console.log("executed")
}
else{
    console.log("not executed")
}

if(2=="2"){
    console.log("executed")
}
else{
    console.log("not executed")
}
//check balance
const balance=2000
if(balance>500)console.log("test");
