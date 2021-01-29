# Typescript GraphQL AST Parser

!!! DON'T USE THIS CODE IN THE PRODUCTION !!! 


If you want to interactive play with this source code, just copy paste `index.ts` into https://www.typescriptlang.org/play and set typescript version to at least 4.2-beta.


This repository is just my fun project where I demonstrate power of typescript by writing Graphql parser in pure Type system.

## Preview


![Parser preview](/docs/screenshot-1.png)

![Parser preview](/docs/screenshot-2.png)

![Parser preview](/docs/screenshot-3.png)


### Demo Graphql Schema
```graphql

# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
type Book {
  title: String!
  author: Float!
  age: Int
}

enum DemoCarType {
  FOR_SALE
  ON_REQUEST
}

input Pagination {
  value: String
}

# case, the "books" query returns an array of zero or more Books (defined above).
type Query {
  books(limit: Int!, offset: String): [Book]
  firstName: String!
  lastName: Boolean
}
`
```

## TS Parser supports

- Comments
  - Single line comments ✅
  - Multiline Comments ❌
- Types ✅
- Enums ✅
- Input Types ✅
- Fields ✅
  - Basic Values ✅
    - String ✅
    - Boolean ✅
    - Float ✅
    - Int ✅
  - Nullable Fields ✅
  - Array Fields ✅
  - Arguments ✅
    - Default Parameters ❌
    - Fields ✅ - Basic Values ✅
        - String ✅
        - Boolean ✅
        - Float ✅
        - Int ✅
      - Nullable Fields ✅
      - Array Fields ✅
- Interfaces ❌
- Mutations ❌
    
(Btw Source code is full of bugs and edge case issues...)