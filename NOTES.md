# NOTES

## Basic notes on the fundamentals of programming

**Gerenciando versões das dependências NODEJS/NPM**

Example:
```javascript
  "dependencies": {
    "cfonts": "^3.1.1"
  },
```

- `major.minor.patch`
- `major` = Alteracoes que pode afetar o funcionamento da versão
- `minor` = Alteracoes sem quebrar a versao atual
- `patch` = Correcoes de bug

**Sempre que atualizar o npm:**
- `^` = O minor e patch serão atualizados
- `~` = Apenas o patch será atualizado
- `*` = Toda a versão será atualizada
- `=` Versão fixa, não muda.

---

#### CSS:


---

#### HTTP:

- `OPTIONS` = Info da disponibilidade da requisicão
Seguro: Sim
Idempotente: Sim
Body Request: Não
Body Response: Não
Cacheable: Não
Uso em form HTML: Não 

- `GET` = Pegar recurso e receber dados
Seguro: Sim
Idempotente: Sim
Body Request: Não
Body Response: Sim
Cacheable: Sim
Uso em form HTML: Sim

- `HEAD` =  Semelhante ao Get mas recebemos somente o cabecalho
Seguro: Sim
Idempotente: Sim
Body Request: Não
Body Response: Não
Cacheable: Não
Uso em form HTML: Sim 

- `POST` = Enviar/Publicar/Cadastrar recurso
Seguro: Não
Idempotente: Não
Body Request: Sim
Body Response: Sim
Cacheable: Sim
Uso em form HTML: Sim

- `PUT` = Criar/Atualizar recurso
Seguro: Não
Idempotente: Sim
Body Request: Sim
Body Response: Não
Cacheable: Não
Uso em form HTML: Não
 
- `PATCH` = Modificar parcial o recurso
Seguro: Não
Idempotente: Não
Body Request: Sim
Body Response: Sim
Cacheable: Não
Uso em form HTML: Não
  
- `DELETE` = Remover um recurso
Seguro: Não
Idempotente: Sim
Body Request: Sim
Body Response: Sim
Cacheable: Não
Uso em form HTML: Não

**Curl:**
- `-L` = Redirecionamento
- `-i` = Visualizar o body e os cabeçalhos da requisição
- `-I` = Visualizar apenas os cabeçalhos da requisição 
- `-O` = Fazer o download de um arquivo, e escolher o nome
- `-s` = Esconder informações de progresso
- `-#` = Barra de progresso simples
- `-X` = Especificar qual método usará
- `-H` = Adicionar um cabeçalho
- `-d` = Adicionar orgumentos


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
- `==` : igual
- `===` : estritamente igual
- `!=` : diferente
- `!==` : estritamente diferente
- `<` : menor
- `>` : maior
- `||` : ou
- `%` : Atribuição de resto
- `**` : Operador de exponencião
- `operand++` : Postfix
- `++operand` : Prefix
- `operand + operand` : Infix


**Operador:**
- Unario = 1 operando: ++1
- Binario = 2 operando: 1 + 1
- Ternario = 3 operando: nota <= 1 ? 'True' : 'False'

---

#### `ESTRUTURA DE CONTROLE`
- `if`
- `switch`
- `while`
- `do/while`
- `for`
- `for/in`

---

#### `CONVENCÕES PARA TYPESCRIPT`
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

Retira algo da estrutura de um Array || Object.

Example
```javascript
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)
```

---

### `Callback`

Podemos utilizar uma funcão como argumento para outra funcão

Example
```javascript
function imprimirDado(dados) {
    console.log(dados())
}

imprimirdado(function () {
    return 'Olá mundo!'
})
```

---

### `Promise`

Um objeto JavaScript com a compromessa de que algo será realizado

*Stagios:*
- `Pending` = Estado inicial, promessa iniciada
- `Fulfilled` = Promessa aceita/concluída
- `Rejectd` = Promessa rejeitada/concluída
- `Settled` = Concluiída, seja aceita ou rejeitada

Example
```javascript
let pedidoCar = True

console.log('Pedir Uber')

const promise = new Promise ((resolve, reject) => 
{
    if (pedidoCar) {
        return resolve('Carro chegou!')
    }
    
    return reject('Motorista recusou')
})

console.log('Aguardando')

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Obrigado, por ussar nosso aplicativo.'))


```