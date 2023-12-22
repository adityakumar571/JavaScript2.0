function saymyname(){
    console.log("hello!! Aditya")
}
saymyname()
//adition by functions
function adition(number1,number2){
    console.log(number1+number2)
}
adition(4,5)
//user login function
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return username
}
 console.log(loginUserMessage())