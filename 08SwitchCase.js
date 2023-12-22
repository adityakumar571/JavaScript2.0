const prompt=require("prompt-sync")
let month=prompt("enter any month name")
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febury");
        break; 
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("April");
        break;

    default:
        
        console.log("there are not any month under 3")
        break;
}