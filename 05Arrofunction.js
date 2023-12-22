//const user=function(){
  //  let username="aditya"
    //console.log(this.username)
//}
//user()

//+++++++++++++++++++Arrofunction++++++++++++++++++
const user=() => {
    let username="aditya"
    console.log(this)
}
user()
//+++++++++++++++++++++++example1 emplcity return
//const addtwo=(num1,num2)=>{
 //   return num1+num2
//}
//console.log(addtwo(3,5))

//++++++example2
const addthree=(num1,num2,num3)=>(num1+num2+num3)
const addthreewithname=(num1,num2,num3)=>({username:"aditya"})
console.log(addthree(4,6,10))
console.log(addthreewithname(4,5,10))
