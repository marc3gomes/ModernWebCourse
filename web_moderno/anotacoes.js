//Abrir code runner control + option + n
//JASON é um formato textual de js (Java Script Object Notations)

/*
    = : atribuição
    == : igual
    === : extamente igual
    != : diferente
    !== : totalmente diferente
    < : menor
    > : maior
    || : ou
    % : Atribuição de resto
    ** : Operador de exponencião
    if = se

*/

// .length = acessar a quantidade de elementos dentro de um array
// for = um laço de repetição

var romanToInt = function(s) {
    var nums = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
    let resultado = 0
        for(let i = 0; i < s.length;) {
            const indice = s[i] + s[i + 1]
            const intNums = nums[indice] ? indice : s[i]
            resultado += nums[intNums]
            i += intNums.length
        }
    return resultado
}

console.log(romanToInt('IX'))
