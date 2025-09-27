function checkBalance(balance, amount) {
  return new Promise((resolve, reject) => {
    console.log("Checking balance...");
    if (balance >= amount) {
      resolve(balance);
    } else {
      reject("Error: Insufficient funds");
    }
  });
}

function deductAmount(balance, amount) {
  return new Promise((resolve, reject) => {
    console.log("Deducting amount...");
    if (amount > 0) {
      resolve(balance - amount);
    } else {
      reject("Error: Invalid amount");
    }
  });
}

function confirmTransaction(newBalance) {
  return new Promise((resolve) => {
    console.log("Confirming transaction...");
    resolve(`Transaction complete. New balance: ${newBalance}`);
  });
}
function transferMoney(balance, amount) {
  checkBalance(balance, amount)
    .then(bal => deductAmount(bal, amount))
    .then(newBal => confirmTransaction(newBal))
    .then(result => console.log(result))
    .catch(err => console.error(err));
}


transferMoney(299, 300);
transferMoney(1000, 300);
