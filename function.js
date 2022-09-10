//function expression

//parameters
const sum = function(number1, number2){
    total = number1 + number2
    return total
}

let numero1 = 35
let numero2 = 10 

console.log(`A soma de ${numero1} e ${numero2} é ${sum(numero1, numero2)}`) // arguments

// funtion constructor

function Person (name){
    this.name = name
    this.walk = function(){
        return `${this.name} está andando!`
    }
}

const franco = new Person('Franco')
const leticia = new Person('Letícia')

console.log(franco.walk())
console.log(leticia.walk())

// example function constructors

//type data

let date = new Date("1991-04-01")

console.log(date)

//type string

let name = new String("Franco")
console.log(name)