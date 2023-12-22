
const userloggIn=true
const debitcard=true
const userloginFromGoogle=false
const userloggInFromPhone=false
if(userloggIn&&debitcard&& userloginFromGoogle||userloggInFromPhone){
    console.log("Allow to buy course")
}
else{
    console.log("Not allowed")
}
