 let savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
           return savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        let verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
           return savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function () {
        return "welcome! your balance is currently $1000 and your interest rate is 1%"
    }
};
