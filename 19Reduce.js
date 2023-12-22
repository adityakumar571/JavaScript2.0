//reduce method
const numbers=[1,2,3,4]
const newnumber=numbers.reduce( function(acc,currval){
    console.log(acc,"=accumaltor value","current value of newnumber",currval);
    return acc+currval
},2)
console.log(newnumber);
//doing samething by arrow function ()=>{}
const price=[100,200,400,500]
const offprice=price.reduce((acc,currval)=>{
    console.log(acc,"acc value","And currvaal",currval);
    return currval-20
},0)
console.log(offprice)