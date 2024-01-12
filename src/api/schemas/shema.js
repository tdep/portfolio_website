const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList
} = require('graphql');

// import the service functions
const { getAllUsers, getUserById, getUserByUsername
} = require('../resolvers/user-resolver');

// import the user entity
const UserType = require('../types/users');

// declare the queries with the resolvers
const RootQueries = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    // available queries for the GraphQL API
    getAllUsers: {
      type: new GraphQLList(UserType), // return type user list
      resolve: () => { // invoking the defined service functions
        return getAllUsers();
      }
      },
    getUserById: {
      type: UserType, // input args
      args: {
        userId: {
        // input var - userId of type string
          type: GraphQLString
      }
    },
    resolve: (_source, args) => { // the resolver function to fetch data for the request
      const {userId} = args;
      return getUserById(userId);
    }
    },
    getUserByUsername: {
      type: UserType,
      args: {
        username: {
          type: GraphQLString
        },
      },
      resolve: (_source, args) => {
        const {username} = args;
        return getUserByUsername(username);
      }
    }
  }
})

// create a GraphQL Schema
const schema = new GraphQLSchema({ // the queries that users can use to fetch
  query:
    RootQueries,
    types: [
      UserType
    ]
});

module.exports = schema;