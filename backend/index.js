const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const { graphqlHTTP } = require("express-graphql");

const app = express();

connectDB();

app.use(cors());

app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === "development",
    })
  );

app.listen(port, console.log(`Server running at http://localhost:${port}`));
