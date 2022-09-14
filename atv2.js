
let controleDeGastos = {

    despesa: [1005.45, 87, 950, 65.99],
    receita: [3000, 1500]

}

function sum (array) {
    
    let total = 0;
    
    for(let value of array){
        total += value
    }
    return total
}

function demonstrativo(){
    const calculaDespesa = sum(controleDeGastos.despesa)
    const calculaReceita = sum(controleDeGastos.receita)
    total = calculaReceita - calculaDespesa
    
    if(total >= 0){
        console.log('Saldo Positivo')
    }else{
        console.log('Saldo negativo')
    }
    return
}

