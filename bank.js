// deposit amount

document.getElementById("deposit-btn").addEventListener("click", function () {
  // add input
  const depositAmount = document.getElementById("dep");
  const newDepositAmount = Number(depositAmount.value);

  // add deposit amount
  const deposit = document.getElementById("deposit-num");
  const currentDepositAmount = Number(deposit.innerText);

  const totalDepositAmount = currentDepositAmount + newDepositAmount;
  deposit.innerText = totalDepositAmount;

  //   add on balance
  const balance = document.getElementById("balance-num");
  const currentBalance = Number(balance.innerText);
  const updateBalance = currentBalance + newDepositAmount;
  balance.innerText = updateBalance;

  //   clear deposit field
  depositAmount.value = " ";
});

// withdraw amount
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // add input
  const withdrawAmount = document.getElementById("with");
  const newWithdrawAmount = Number(withdrawAmount.value);
  if (isNaN(newWithdrawAmount)) {
    alert("please input a valid number");
    return;
  }

  //   add balance
  const balance = document.getElementById("balance-num");
  const currentBalance = Number(balance.innerText);
  if (newWithdrawAmount > currentBalance) {
    alert("Baap er bank e eto taka nai");
    return;
  }
  const newBalance = currentBalance - newWithdrawAmount;
  balance.innerText = newBalance;

  //   update on withdraw
  const withdraw = document.getElementById("withdraw-num");
  const withdrawValue = Number(withdraw.innerText);
  //   clear deposit field
  withdrawAmount.value = " ";

  const updatedWithdrawValue = withdrawValue + newWithdrawAmount;
  withdraw.innerText = updatedWithdrawValue;

  //   clear deposit field
  withdrawAmount.value = " ";
});
