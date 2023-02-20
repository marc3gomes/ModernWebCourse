/*

Challenge:

Create a function that receives a string in celcius or fahrenheit
and converts from one unit to another
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/



function transformDegree(degree) {
    const celciusIdentification = degree.toUpperCase().includes("C")
    const fahrenheitIdentification = degree.toUpperCase().includes("F")

    if (!celciusIdentification && !fahrenheitIdentification) {
        throw new Error("Invalid degree")
    }

    let removeStringToDegree = degree.replace(/[a-zA-Z]+/g, "");
    let transformStringNumber = Number(removeStringToDegree)
    let convert = (celcius) => celcius * 9 / 5 + 32
    let degreeString = "F"

    if (fahrenheitIdentification) {
        convert = (fahrenheit) => (fahrenheit - 32) * 5/9 
        degreeString = "C"   
    }

    return convert(transformStringNumber).toFixed(2) + "°" + degreeString
    
}

try {
   console.log(transformDegree('100.4F')),
   console.log(transformDegree('38C'))
   console.log(transformDegree('39zeee'))
} catch (error) {
    console.log(error.message)
}