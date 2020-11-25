// var express = require("express")
// var { graphqlHTTP } = require("express-graphql")
// var { buildSchema } = require("graphql")
// var resolver = require("./resolvers")
// var cors = require("cors")

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     genres(id: String) : [Genre],
//     movies(id: String) : [Movie]
//   }
//   type Genre {
//     id: String,
//     name: String,
//   }

//   type Movie {
//     id : String,
//     title : String,
//     rate: Float,
//     stock : Int,
//     genre : Genre
//   }
// `)

// var app = express()

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded())

// app.get("/product", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for all origins!" })
// })

// app.use(
//   "/",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: resolver,
//     graphiql: true,
//   })
// )
// app.listen(process.env.port || 4000)
// console.log("Running a GraphQL API server at", process.env.port || 4000)

const http = require("http")

http
  .createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World\n")
  })
  .listen(process.env.PORT)
