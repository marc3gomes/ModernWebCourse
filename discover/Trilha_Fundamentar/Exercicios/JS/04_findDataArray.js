/* 

Challenge:
  
∞ Fetching and counting data in Arrays∞

Based on the Array of Books by Category below, do the fllowing challenges.

    • Count the number of categories and the number of books in each category
    • Count the number of authors
    • Show books by author Augusto Cury
    • Transform the above function into a function that will receive the author's name and return that author's books.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da B  abilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length;

console.log(`The total of categories is: ${totalCategories}`)

for(let category of booksByCategory) {
    console.log(`${category.category} contains ${category.books.length} books`)
}

function countAuthors() {
    let authors = []

    for(let category of booksByCategory) {
        for (let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log(`There is a total of ${authors.length} authors`)
}

countAuthors()

function booksAuthors(authorName) {
    let bookAuthors = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author == authorName) {
                bookAuthors.push(book.title)
            }
        }
    }

    console.log(`${authorName}'s books:
    ${bookAuthors.join(", ")}`)

}

booksAuthors("Augusto Cury")