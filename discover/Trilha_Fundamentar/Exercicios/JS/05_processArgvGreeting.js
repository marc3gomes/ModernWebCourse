/* 

Challenge:

    In this document we need to import the getflag function and pass the desired flag.

    We will run the second file in the terminal passing the flags --name and --greeting.
    so that the person's greeting and name are printed on the terminal.

*/

const getFlag = require('./05_processArgvFlag')

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`)
