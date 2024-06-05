var arr = [1, 2, 3, 4, 5]

console.log(arr)
//splice(valor do indece, quantos vamos excluior, o novo valor)
// pode adicionar ou excluir um valor usando o valor do seu indece

//adicionando 

arr.splice(2, 2, "teste")

console.log(arr)

//excluindo 

arr.splice(1, 1)

console.log(arr)

//reverse() - inverter a ordem do vetor

arr.reverse()

console.log(arr)

//indexOf()