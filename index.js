/*const chalk = require('chalk');
console.log(chalk.blue('Hello, npm!'));*/

const object = require('./information');
var cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello I am ${object.name} from ${object.campus} campus!`,
    e : "oO",
    T : "U "
}));
