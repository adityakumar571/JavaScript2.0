//for of
const myarray=[1,2,3,4,5]
for (const num of myarray) {
    console.log(num);
}
 const greetings="hello world"
 for (const greet of greetings) {
   console.log("for each char is",greet)
  
 }
 //Map
 const map=new Map()
 map.set('IN',"India")
 map.set('USA',"UNITED STATE OF AMERICA")
 map.set('Fr',"France")
 console.log(map);
 for (const [key,value] of map) {
    console.log([key,value]);
    
 }
