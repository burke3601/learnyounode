// let numbers = process.argv.slice(2);

// console.log('numbers: ', numbers)

// console.log(process.argv)

let result = 0

for (i = 2; i < process.argv.length; i ++)
    result += Number(process.argv[i])

console.log(result)