# NOTES

## Basic notes on the fundamentals of programming

**Managing versions of NODEJS/NPM dependencies**

Example:
```javascript
  "dependencies": {
    "cfonts": "^3.1.1"
  },
```

- `major.minor.patch`
- `major` = Changes that may affect the operation of the version
- `minor` = Changes without breaking the current version
- `patch` = Bug fixes

**Sempre que atualizar o npm:**
- `^` = The minor and patch will be updated
- `~` = Only the patch will be updated
- `*` = All version will be updated
- `=` = Fixed version, does not change.

---

#### HTTP:

- `OPTIONS` = Request availability info
insurance: yes
Idempotent: Yes
Body Request: No
Body Response: No
cacheable: no
Usage in HTML form: No

- `GET` = Get resource and receive data
insurance: yes
Idempotent: Yes
Body Request: No
Body Response: Yes
cacheable: yes
Usage in HTML form: Yes

- `HEAD` = Similar to Get but we only get the header
insurance: yes
Idempotent: Yes
Body Request: No
Body Response: No
cacheable: no
Usage in HTML form: Yes

- `POST` = Send/Publish/Register resource
Insurance: No
Idempotent: No
Body Request: Yes
Body Response: Yes
cacheable: yes
Usage in HTML form: Yes

- `PUT` = Create/Update resource
Insurance: No
Idempotent: Yes
Body Request: Yes
Body Response: No
cacheable: no
Usage in HTML form: No
 
- `PATCH` = Partially modify the resource
Insurance: No
Idempotent: No
Body Request: Yes
Body Response: Yes
cacheable: no
Usage in HTML form: No
  
- `DELETE` = Remove a resource
Insurance: No
Idempotent: Yes
Body Request: Yes
Body Response: Yes
cacheable: no
Usage in HTML form: No

**Curl:**
- `-L` = Redirection
- `-i` = View request body and headers
- `-I` = View request headers only
- `-O` = Download a file, and choose the name
- `-s` = Hide progress information
- `-#` = Simple progress bar
- `-X` = Specify which method to use
- `-H` = Add a header
- `-d` = Add arguments


---

## Basic notes on the foundations of language JS

#### `OPERATORS`

**Assignment**
- `=` : Assignment
- `+=` : Additive Assignment *(A addition is made along with the assignment)*
- `-=` : Subtractive Assignment
- `*=` : Multiplicative Assignment
- `/=` : Divisible Assignment
- `%=` : Modular Assignment

**Others**
- `==` : equal
- `===` : strictly equal
- `!=` : different
- `!==` : strictly different
- `<` : smaller
- `>` : bigger
- `||` : or
- `%` : Remainder Assignment
- `**` : Exponentiation operator
- `operand++` : Postfix
- `++operand` : Prefix
- `operand + operand` : Infix


**Operador:**
- Unary = 1 operand: ++1
- Binary = 2 operand: 1 + 1
- Ternary = 3 operand: grade <= 1 ? 'True' : 'False'

---

#### `CONTROL STRUCTURE`
- `if`
- `switch`
- `while`
- `do/while`
- `for`
- `for/in`

---

#### `CONVENTIONS FOR TYPESCRIPT`
- `S` = state
- `T` = type
- `K` = Key
- `V`= value
- `E` = element

---

#### `Template String`
Used to concatenate data more elegant and more practical.

The string template considers line breaks without errors.

Example:
```javascript
const name = 'Rebeca'
const template = `
    Hello
    ${name}!`
console.log(template)

// expected output: Hello
    Rebeca!
```

It is possible to use logical expressions as long as it is inside the template $ {1 + 1}.
We can also define values for variables example: $ {Name ('Rebeca')}

---

### `Array`

In short, it is similar to a geometry vector, a unidirectional indexed structure. That is, we can access the values based on indices.

The array groups multiple values in a linear form.

Within JavaScript the array is object.

Example:
```javascript
const values = [A, B, C, D]
console.log(values[0], values[3])

// expected output: A D
```

We can also access the amount of array elements through `length`.

Example:
```javascript
console.log(values.length)

// expected output: 4
```

We can add new elements to the array using the `push` function.

Example:
```javascript
values.push(E, false, null, 'test')
console.log(values)

// expected output: [ A, B, C, D, E, false, null, 'test' ]
```

We can remove the last value of the array using the Function `pop`.

Example:
```javascript
console.log(values.pop())

// expected output: test
```

Or we can exclude an array value using its index, with the `delete` function.

Example:
```javascript
delete values[0]

// expected output: [ <1 empty item>, B, C, D, E, false, null ]
```

---

### `Object`

Object is a collection, a group of pairs: key and value.

We can create the object literally or through an empty object and add the attributes later.

The way to create an object in JavaScript is from a function.

Example:
```javascript
const product = {
    name: 'Polo shirt'
    price: '70'
}
console.log(product)

// expected output: { name: 'Polo shirt', price: '70' }
```

---


### `Function`

The function plays a fundamental role in the JS language, almost everything is a function within the language.

To have an analogy of the function's importance, we could say that: If JavaScript were a country, the function would be the president.

A function is an action, it executes a process based on a sequence of code.

Example:
```javascript
//No return function
function printSum(a, b) {
    console.log(a + b)
}

printSum(2, 3)

// expected output: 5

---

//Function with return
function sum(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))

// expected output: 5

---

//Storing a function in a variable
const printSum = function (a, b) {
    console.log(a + b)
}

printSum(2, 3)

// expected output: 5

---

//Storing an arrow function in a variable
const sum = (a, b) => {
    return a + b
}
console.log(sum(2, 3))

// expected output: 5

---

//Implicit return
const subtraction = (a, b) => a - b
console.log(subtraction(2, 3))

// expected output: -1
```

---

### `Var`

When we create a variable outside a function using "VAR", we will have it globally available, even if it is inside a code block. From the moment we have the "VAR" associated within a function, we will only have access to this variable in the scope of the function.

**Variables defined as "var", have global scope and function scope**

Example:
```javascript
var number = 1
{
    var number = 2
    console.log('inside =', number)
}
console.log('outside =', number)

// expected output: inside = 2
// outside = 2
```

---

### `Let`

Unlike var, "LET" has one more scope, the block scope.

So even if it is not a function, it will respect the block in which the variable was created.

**Variables defined as "let", have global scope, function scope and block scope**

Example:
```javascript
let number = 1
{
    let number = 2
    console.log('inside =', number)
}
console.log('outside =', number)

// expected output: inside = 2
// outside = 1
```

---

### `Hoisting`

Still talking about variables, there is a concept within JavaScript that does an icing, throwing a variable defined as var upwards.

Unlike if a let variable is used, this concept does not occur.

Example:
```javascript
// Using var
console.log('a =', a)
var a = 2
console.log('a =', a)

// expected output: a = undefined
a = 2

---

// Using let
console.log('a =', a)
let a = 2
console.log('a =', a)

// expected output: err
```

---

### `Destructuring`

Removes something from the structure of an Array || Object.

Example
```javascript
const people = {
    name: 'Ana',
    age: 5,
    adress: {
        logradouro: 'Rua ABC',
        number: 1000
    }
}

const { name, age } = people

console.log(name, age)
```

---

### `Callback`

We can use a function as an argument to another function

Example
```javascript
function printDate(data) {
    console.log(data())
}

printDate(function () {
    return 'Hello Word!'
})
```

---

### `Promise`

A JavaScript object with the compress that something will be done

*Stages:*
- `Pending` = Initial state, promise started
- `Fulfilled` = Promise accepted/completed
- `Rejectd` = Promise rejected/completed
- `Settled` = Completed, either accepted or rejected

Example
```javascript
let requestCar = True

console.log('Order Uber')

const promise = new Promise ((resolve, reject) => 
{
    if (requestCar) {
        return resolve('Car has arrived!')
    }
    
    return reject('Driver refused')
})

console.log('Waiting')

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Thanks for using our app.'))


```