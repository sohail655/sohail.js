let balance = 5999

correctPin = "1234"

enterPin = prompt("Please enter your pin")

if (enterPin === correctPin) {
    console.log("Login Successful");
    while (true) {
        let choice = prompt(" Please choice option : /.N-1: check balance /.N-2: deposit Cash /.N-3: withdraw money /.N-4: Exit")

        if (choice === "1") {
            console.log(`your current balance is ${balance}`);
        }else if (choice === "2") {
            let depositAmount = parseInt(prompt("please enter your deposit amount"))
            if (!isNaN(depositAmount) && depositAmount > 0) {
                balance += depositAmount
                console.log(`${depositAmount} has been deposit into your account`);
                console.log(`${balance} is your new balance`);   
            }else{
                console.log("please enter a valid amount");
            }
        }else if (choice === "3") {
            let withdraw = prompt("please enter the withdraw amount")
            if (withdraw > balance){
                console.log("insufficient balance");
                
            }else if(!isNaN(withdraw) && withdraw > 0 ) {
                balance -= withdraw
                console.log(`${withdraw} has been withdraw from your balance`);
                console.log(`${balance} is your current balance `);
                 
            }else{
                console.log("please enter valid amount");
                
            }
        }else if (choice === "4") {
            console.log("Thank You for using our ATM services");
            
        }else{
            console.log("please enter a correct option");
            
        }
    }
    
}else{
    console.log("wrong password");
    
}