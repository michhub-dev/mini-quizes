/*checking your account balance at the atm*/

let balance =380.99;
let isActive ="no";
let checkBalance ="yes";
let message;


if (checkBalance ==="no") {
    message = "thank you. Have a nice day!"
} else if (checkBalance ==="yes" && isActive ==="yes" && balance >0) {
    message = "your account balance is" + " " + balance;
}  else {
    message ="your balance is negative. pls contact bank"
}
