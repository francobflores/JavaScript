//Manipulating Arrays


// array

let techs = ['html', 'css', 'js']


//add at the end

techs.push('nodejs')

//add at the begin

techs.unshift('sql')

//remove at the end

techs.pop()

//remove at the begin
techs.shift()


//show array 
//console.log(techs)


let index = techs.indexOf('html')
console.log(index)

//remove the index

techs.splice(index,1)

console.log(techs)