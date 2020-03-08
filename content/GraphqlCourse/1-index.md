---
title: 'Get data from datasource using Graphql API'
metaTitle: 'Get data from datasource using Graphql API'
metaDescription: 'Get data from datasource using Graphql API'
---
Datasource

1. Relational datasource (eg: PostgreSQL, Microsoft SQL Server, etc)
2. Document based datasource ( eg: DynamoDB, CosmoDB, MongoDB etc)
3. REST endpoint (eg: API built with .NET WebAPI, NodeJS Express, etc)

Using GraphQLSchema
It takes two configuration objects

- query
- mutation

## Query

Creating a schema

```js
const typeDefs = `
  type Book {
    id: Int!
    title: String!
    pages: Int
    chapters: Int
  }
  

  type Query {
    books: [Book!]
    book(id: Int!): Book
  }
`;
```
Here We defined a Book type with four fields and
    root Query with two fields.
So, these query retrieve

- array of books
- a book based on its id

*note : ! mark means that the field or argument is non-nullable

These are only type defination.So we need to resolve the queries so that right fields are returned with right data.
Here come resolver function.

```js
const books = [{
  id: 1,
  title: "Fullstack tutorial for GraphQL",
  pages: 356
}, {
  id: 2,
  title: "Introductory tutorial to GraphQL",
  chapters: 10
}, {
  id: 3,
  title: "GraphQL Schema Design for the Enterprise",
  pages: 550,
  chapters: 25
}];

const resolvers = {
  Query: {
    books: function(root, args, context, info) {
      return books;
    },
    book: (root, args, context, info) => books.find(e => e.id === args.id)
  },
  Book: {
    id: parent => parent.id,
    title: parent => parent.title,
    pages: parent => parent.pages,
    chapters: parent => parent.chapters
  }
};
```

```js
function (root, args, context, info) { // function implementation }
```
Those are four arguments that every resolver function receives.

1. root
2. args
3. context
4. info

Final Setting up the server

```js
const typeDefs = ``

const typeDefs = []

const resolvers = {}

const server = new GraphQLServer ({
    typeDefs,
    resolvers
})

server.start(()=> console.log(`server is running on .....));
```

Go to the server running port or url. Run following query

```graphql
query {
  books {
    id
    title
    chapters
  }
}
```

## mutation

```tsx
type BreedsQuery = {
    breeds : string[]
}

export const BreedSelector = () =>{
    const {loading, error, data} = useQuery<BreedQuery> (BREEDS)
    
}


```
