// let i,j,array=[1,2,5,7,4,8,10]
// for(i=2;i<10;i++)
// {
//     for(j=1;j<=10;j++){
//     console.log(i+'*'+j+'='+i*j);
//     }
// }
let myarray=["aditya","shri Ram", "Hanuman","shiv"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

//break and continue in javascript
for(let i=0;i<=20;i++){
    if(i==5){
    console.log(i);
    break;
    }
    console.log(i);
}