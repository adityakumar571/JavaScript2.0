//nested scop
function one(){
    const username="aditya"

    function two(){
        const website="desiCoders"
        console.log(username)
    }
    //console.log(website)
    //two()
}
one()
//++++++++++++++++ another way to define function++++++++++++
const functionNumber2= function( num1){
    return num1+2;
    console.log('this is the another way to difing a function')
}
console.log(functionNumber2(10))