// Object that cpntains the family's income and expenses in array form.
let family =
{
    incomes:[2550, 3000, 1100],
    expenses: [500, 200, 150, 2000, 700, 1500, 1600]
}
// function that sum values array
function sum(array)
{
    let total = 0;

    for(let value of array)
    {
        total += value
    }
    return total
    
}

//  show sum incomes and expenses
console.log(`Soma das receitas: ${sum(family.incomes)}`)
console.log(`Soma das despesas: ${sum(family.expenses)}`)

//  function that calculate family balance

function familyBalance()
{
    const calculateIncomes = sum(family.incomes) 
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    if(total < 0){
        console.log('negativo')
    } else{
        console.log('positivo')
      }
}

familyBalance()
