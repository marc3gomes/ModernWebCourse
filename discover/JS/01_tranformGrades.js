/*

Challenge:

Create an algorithm that transforms system notes
numerical for note system in characters type A B C

* from 90 upwards - A
* between 80 - 89 - B
* between 70 - 79 - C
* between 60 - 69 - D
* less than 60 - F

*/

function transfomSchoolGrades(grade) {
    const scoreA = grade > 90 && grade < 100
    const scoreB = grade > 80 && grade < 90
    const scoreC = grade > 70 && grade < 80
    const scoreD = grade > 60 && grade < 70
    const scoreF = grade < 60 && grade > 0

    let resultGrades = ""
    
    if(scoreA) {
        resultGrades = "A"
    } else if(scoreB) {
        resultGrades = "B"
    } else if(scoreC) {
        resultGrades = "C"
    } else if(scoreD) {
        resultGrades = "D"
    } else if(scoreF) {
        resultGrades = "F"
    } else {

        resultGrades = "Invalid grade"
    }

    return resultGrades

}

console.log(transfomSchoolGrades(92))
console.log(transfomSchoolGrades(87))
console.log(transfomSchoolGrades(71))
console.log(transfomSchoolGrades(64))
console.log(transfomSchoolGrades(32))
console.log(transfomSchoolGrades(192))
console.log(transfomSchoolGrades(-13))