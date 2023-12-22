const myarray=["Sumantra","vansh","kanchan","Sumantra","vansh","kanchan"]
// let newarray=myarray.filter((Element)=> 
// { 
//     return Element=="Sumantra"
// })
// console.log(newarray);
//here we are doing to do that same operation by another way and without using filter method
const newarray=[]
myarray.forEach(element => {
if(element=="Sumantra"){
newarray.push(element)
}
    
});
console.log(newarray)
//chainning
const numbers=[1,2,3,4,5,6,7,8]
const newnumber=numbers
.map((element)=>element*2)
//.map((element)=>element/3);
console.log(numbers)
console.log(newnumber)