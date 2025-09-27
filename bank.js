const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 0; 

function askAction() {
  console.log(`\nYour current balance: ${balance}`);
  rl.question("Do you want to (deposit / withdraw) or type 'exit' to quit: ", (action) => {
    action = action.toLowerCase();

    if (action === "exit") {
      console.log("Exiting... Goodbye!");
      rl.close();
      return;
    }

    if (action !== "deposit" && action !== "withdraw") {
      console.log("Invalid choice. Try again.");
      return askAction();
    }

    rl.question(`Enter amount to ${action}: `, (answer) => {
      let amount = parseFloat(answer);

      if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Try again.");
        return askAction();
      }

   
      rl.question(`Are you sure you want to ${action} ${amount}? (yes/no): `, (confirm) => {
        if (confirm.toLowerCase() === "yes") {
          if (action === "withdraw") {
            if (amount > balance) {
              console.log("Insufficient funds.");
            } else {
              balance -= amount;
              console.log(`Withdrawal successful. New balance: ${balance}`);
            }
          } else if (action === "deposit") {
            balance += amount;
            console.log(`Deposit successful. New balance: ${balance}`);
          }
        } else {
          console.log("Transaction cancelled.");
        }
        askAction();
      });
    });
  });
}

askAction();
