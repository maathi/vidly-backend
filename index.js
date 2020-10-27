var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var resolver = require("./resolvers");
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    genres(id: String) : [Genre],
    movies(id: String) : [Movie]
  }
  type Genre {
    id: String,
    name: String,
  }

  type Movie {
    id : String,
    title : String,
    rate: Int,
    stock : Int,
    genre : Genre
  }
`);

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
