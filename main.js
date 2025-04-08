const income = document.querySelector("#income");
const food = document.querySelector("#food");
const rent = document.querySelector("#rent");
const clothes = document.querySelector("#clothes");
const totalExpenses = document.getElementById("total-expenses");
const currentBalance = document.getElementById("current-balance");
const savePercentage = document.getElementById("save-percentage");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

const calculateExpense = () => {
  if (income.value === "" || Number(income.value) < 0) {
    alert("Income must be a positive number.");
    income.value = "";
    return;
  } else if (food.value === "" || Number(food.value) < 0) {
    alert("Food must be a positive number.");
    food.value = "";
    return;
  } else if (rent.value === "" || Number(rent.value) < 0) {
    alert("Rent must be a positive number.");
    rent.value = "";
    return;
  } else if (clothes.value === "" || Number(clothes.value) < 0) {
    alert("Clothes must be a positive number.");
    clothes.value = "";
    return;
  }

  const expense =
    Number(food.value) + Number(rent.value) + Number(clothes.value);
  const balance = Number(income.value) - expense;

  if (expense > income.value) {
    alert("Expenses cannot be more than income.");
  } else {
    totalExpenses.innerText = expense;
    currentBalance.innerText = balance;
  }
};

const calculateSavings = () => {
  if (savePercentage.value === "" || Number(savePercentage.value) < 0) {
    alert("Save must be a positive number.");
    savePercentage.value = "";
    return;
  }

  const save = (Number(savePercentage.value) / 100) * Number(income.value);
  const balance = Number(currentBalance.innerText) - save;

  if (balance < 0) {
    alert("Saving amount cannot be greater than current balance.");
    savePercentage.value = "";
  } else {
    savingAmount.innerText = save;
    remainingBalance.innerText = balance;
  }
};
