var arr = [1, 2, 3, 4, 5]

console.log(arr)
//splice(valor do indece, quantos vamos excluior, o novo valor)
// pode adicionar ou excluir um valor usando o valor do seu indece

//adicionando 

arr.splice(2, 0, "teste")

console.log(arr)

//excluindo 

arr.splice(1, 1)

console.log(arr)

//indexOf() - saber qual o valor do indece do numero ou se não existe dentro do vetor

console.log(arr.indexOf(5))

//caso o valor não exista dentro do vetor

console.log(arr.indexOf(8))

//join("o que ira separa cada valor")
//para converter o valor de um vetor em string 

var arr2 = ['o', 'rato', 'roeu', 'a', 'roupa']


console.log(arr2.join(" "))

//reverse() - inverter a ordem do vetor

arr2.reverse()

console.log(arr2.join(' '))