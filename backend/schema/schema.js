

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType,
    GraphQLScalarType,
} = require("graphql");

const UserType = new GraphQLObjectType({
    name: "Todo",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
        todoList: { type: GraphQLList(GraphQLID) }
    })
})

const TodoType = new GraphQLObjectType({
    name: "Todo",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})