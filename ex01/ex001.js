var arr = [1 , 2 ,3 ,4 ,5 ]

//lenght - retorna o tamanho do array

console.log(arr.length)

//push - adiciona um valor no final do array

arr.push(6) 
arr.push("qualquer coisa")

console.log(arr)

//pop - retira o ultimo valor de um array

arr.pop()

console.log(arr)

//unshift - adiciona um valor no começo de um array

arr.unshift(0)
arr.unshift("teste")

console.log(arr)

//shift - retira o primeiro valor

arr.shift()

console.log(arr)

//acessar o ultimo elemento do array

console.log(arr[arr.length - 1])

//isArray - verificar se é um array

console.log(Array.isArray(5))
console.log(Array.isArray(arr))