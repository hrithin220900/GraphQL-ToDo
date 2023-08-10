const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQlDate,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLScalarType,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    todoList: { type: GraphQLList(GraphQLID) },
    createdAt: { type: GraphQlDate },
    updatedAt: { type: GraphQlDate },
  }),
});

const TodoType = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    completed: { type: GraphQLBoolean },
    createdAt: { type: GraphQlDate },
    updatedAt: { type: GraphQlDate },
  }),
});
