import * as faker from 'faker/locale/en'

export var books = []
for (var i = 0; i<100; i++) {
  books.push({
    id: i,
    title: faker.lorem.sentence(),
    author_id: faker.random.number(100)
  })
}

export var authors = []
for (var i = 0; i<100; i++) {
  authors.push({
    id: i,
    name: faker.name.findName(),
  })
}

export var comments = []
for (var i = 0; i<100; i++) {
  comments.push({
    id: i,
    book_id: faker.random.number(100),
    content: faker.lorem.text(),
  })
}

// console.log(books)
// console.log(authors)
// console.log(comments)

