// const myObject={
//     js:"javaScript",
//     cpp:"C++",
//     rb:"ruby",
//     swift:"swift by apple"
// }
// //for in loop
// for (const key in myObject) {
//     console.log(key,"shortcut is for",myObject[key]);   
// }
//implementation of for in loop on String
const programming=["java","python","c++","c" ,"javascript","ruby"]
for (const key in programming) {
    console.log(programming[key]);
}
//chainning
const numbers=[1,2,3,4,5,6,7,8]
const newnumber=numbers
.map((element)=>num*2)
.map((element)=>number/3);
console.log(numbers)
console.log(newnumber)