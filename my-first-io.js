const fs = require('fs')  

const var1 = fs.readFileSync(process.argv[2])
const var2 = var1.toString().split('\n').length
console.log(var2)

//do i add the -1 or not?