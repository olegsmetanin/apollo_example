import * as faker from 'faker/locale/en'

export var authors = []
for (var i = 0; i < 100; i++) {
  authors.push({
    id: i,
    name: faker.name.findName(),
    img: faker.internet.avatar()
  })
}

export var books = []
for (var i = 0; i < 100; i++) {
  const author_id = Math.floor(Math.random()*100)
  books.push({
    id: i,
    title: faker.lorem.slug(),
    description: faker.lorem.sentence(faker.random.number({min: 50, max: 100})),
    author_id,
    author: authors[author_id],
    img: faker.image.imageUrl()
  })
}

export var comments = []
for (var i = 0; i < 100; i++) {
  comments.push({
    id: i,
    book_id: faker.random.number(100),
    content: faker.lorem.text()
  })
}


// console.log(books)
// console.log(authors)
// console.log(comments)
