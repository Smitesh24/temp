//Modules



const name = require('./names')
// console.log(name)
const greet = require('./util')

 greet('abhi')
greet(name.myn)

//-----------------------------------------------------//
const os = require('os')
//info abt current user

const  user = os.userInfo()
console.log(user);
console.log(`The system uptime ${os.uptime()} seconds`);