/* 

Challenge:

    Create 2 JavaScript Files:

    The frist will export a function called getflag()
    which will receive a String type argument.

    This is function should search within the process.argv array for the flag
    desired, which is the String and return the value of the flag
    
*/

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
}

module.exports = getFlags;