# Basic notes on the foundations of language

#### `isInteger()`
Is the number an integer?

Return: True or False

Example:
```
const average = 7
console.log(Number.isInteger(average))

// expected output: true
```

#### `toFixed()`
Sets the number of decimal places after the dot

Example:
```
const average = 7.89364
console.log(average.toFixed(2))

// expected output: 7.89
```

#### `toString()`
Transforms the value passed in the variable into a string

Example:
```
const average = 7
console.log(average.toString())

// expected output: 7
```

Convert to binary value

Example:
```
const average = 7.87
console.log(average.toString(2))

// expected output: 111.11011110101110000101000111101011100001010001111011
```

#### `charAt(2)`
Returns the character that is at the index indicated within the parentheses.

Example:
```
const school = "Cod3r"
console.log(school.charAt(2))

// expected output: d
```

#### `indexOf()`
It will return the index based on the entered character.

Example:
```
const school = "Cod3r"
console.log(school.indexOf(3))

// expected output: 3
```

#### `substring()`
Returns only the characters that were not indicated within the parentheses

Example:
```
const school = "Cod3r"
console.log(school.substring(1))

// expected output: od3r
```

#### `replace()`
Replaces data

Example:
```
const school = "Cod3r"
console.log(school.replace(3, 'e'))

// expected output: Coder
```

#### `split()`
Convert data into an array.

Within the parentheses we need to define what we want to use as a separator

Example:
```
const names = 'Ana, Maria, Pedro'
console.log(names.split(','))

// expected output: ['Ana', 'Maria', 'Pedro']
```

#### `concat()`
Concat data with values

The symbol of "+" in place of ".concat" can be used when we are using strings.

Example:
```
const school = "Cod3r"
console.log('School '.concat(school).concat('!'))

// expected output: School Cod3r!
```

#### `Template String`
Used to concatenate data more elegant and more practical.

The string template considers line breaks without errors.

Example:
```
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


### `Negotia using '!'`

To turn a number into a boolean value, we need to use logical denial: `!`

If we use denial twice, we will reverse the effect of the first, making the value in True

Example:
```
const isActive = 1

console.log(!isActive)

// expected output: False
```

### `Array`

In short, it is similar to a geometry vector, a unidirectional indexed structure. That is, we can access the values based on indices.

The array groups multiple values in a linear form.

Within JavaScript the array is object.

Example:
```
const values = [A, B, C, D]
console.log(values[0], values[3])

// expected output: A D
```

We can also access the amount of array elements through `length`.

Example:
```
console.log(values.length)

// expected output: 4
```

We can add new elements to the array using the `push` function.

Example:
```
values.push(E, false, null, 'test')
console.log(values)

// expected output: [ A, B, C, D, E, false, null, 'test' ]
```

We can remove the last value of the array using the Function `pop`.

Example:
```
console.log(values.pop())

// expected output: test
```

Or we can exclude an array value using its index, with the `delete` function.

Example:
```
delete values[0]

// expected output: [ <1 empty item>, B, C, D, E, false, null ]
```