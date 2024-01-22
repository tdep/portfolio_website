const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList, GraphQLInt
} = require('graphql');

// import the service functions
const { getAllUsers, getUserById, getUserByUsername
} = require('../resolvers/user-resolver');

// import the user entity
const UserType = require('../types/users');
const JobType = require('../types/jobs');
const {getAllJobs, getJobById, getJobByName} = require("../resolvers/job-resolver");
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
          userId: { // input var - userId of type string
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
        }
      },
      resolve: (_source, args) => {
        const {username} = args;
        return getUserByUsername(username);
      }
    },
    getAllJobs: {
      type: new GraphQLList(JobType),
      resolve: () => {
        return getAllJobs();
      }
    },
    getJobById: {
      type: JobType,
      args: {
        jobId: {
          type: GraphQLInt
        }
      },
      resolve:(_source, args) => {
        const {jobId} = args;
        return getJobById(jobId);
      }
    },
    getJobByName: {
      type: JobType,
      args: {
        name: {
          type: GraphQLString
        }
      },
      resolve: (_source, args) => {
        const {name} = args;
        return getJobByName(name);
      }
    },
  }
})

// create a GraphQL Schema
const schema = new GraphQLSchema({ // the queries that users can use to fetch
  query:
    RootQueries,
    types: [
        UserType,
        JobType
    ]
});

module.exports = schema;