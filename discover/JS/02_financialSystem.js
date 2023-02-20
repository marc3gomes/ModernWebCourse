/*

Challenge:

Create an object that will have 2 properties, both of rype array :
    * incomes: [] 
    * expenses: []


Now, create a function that will calculate the total incomes and expenses
and will show a message if the family is with positive or negative balance,
followed by the balance amount.

*/

let movement = {
    incomes: [1200, 4000, 3200, 250],
    expenses: [10100, 2000, 300, 400]
}

function sum(array) {
    let sumResult = 0;

    for (let sumTotal of array) {
        sumResult += sumTotal;
    }

    return sumResult;
}


function familyFinances() {
    const incomesTotal = sum(movement.incomes);
    const expensesTotal = sum(movement.expenses);

    const subBalance = incomesTotal - expensesTotal;

    let balanceResult

    let balancePositive = subBalance >= 0;

    if (balancePositive) {
        balanceResult = 'positive!'
    } else {
        balanceResult = 'negative!'
    }

    console.log(`Your current balance is ${balanceResult} $${subBalance.toFixed(2)}`)

   
}

familyFinances()