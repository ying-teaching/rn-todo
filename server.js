const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const path = require("path");
const schema = require("./data/schema");
const resolvers = require("./data/resolvers");

const APP_PORT = 3000;

const app = express();
app.use(cors());

// Serve static resources
app.use("/", express.static(path.resolve(__dirname, "public")));

// Setup GraphQL server
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: resolvers,
    pretty: true,
  })
);

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
