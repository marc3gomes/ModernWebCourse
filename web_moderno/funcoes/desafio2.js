function triangulo(a, b, c) {
    if(a == b && b == c){
        return 'Equilátero'
    } else if (a == b || b == c || a == c){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(15, 15, 15))
console.log(triangulo(15, 15, 10))
console.log(triangulo(15, 10, 5))