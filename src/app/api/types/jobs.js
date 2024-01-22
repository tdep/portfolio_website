const { GraphQLObjectType, GraphQLString, GraphQLInt } =
require('graphql');

const JobType = new GraphQLObjectType({
  name: 'job',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    startDate: {
      type: GraphQLString
    },
    endDate: {
      type: GraphQLString
    }
  }
})

module.exports = JobType;