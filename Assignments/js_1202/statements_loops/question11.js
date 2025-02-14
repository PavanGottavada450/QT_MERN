function atmWithdraw(balance, amount){
    if(amount%100 !== 0){
        return "Withdrawals must be in multiples of 100."
    }
    if(amount>balance){
        return "Insufficient balance.";
    }
    balance -= amount;
    return `Withdrawal Successful. Remaining Balance: ${balance}`;
}

console.log(atmWithdraw(1500, 700));