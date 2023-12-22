//truthy value and false value
const userEmail="adityakumar"
if(userEmail){
    console.log("got user email")
}
else{
    console.log("Don't have user email") 
}
//false,0,-0 ,bigInt 0n,"", null, undefined,Nan are the falsy values
//1,"0","fasle"," ",[],{},function(){}
let val1;
//val1=5??10
//val1=null??10
//val1=undefined??15
//nullish coalescing operator
val1=undefined??null??10??3
console.log(val1);
const iceTeaPrice=100
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80")