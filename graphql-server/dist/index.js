import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const users = [
    {
        id: "1",
        username: "Blorpipson",
        email: "blorp@jorn.com",
        password: "hahahahanox50"
    },
    {
        id: "2",
        username: "Freg",
        email: "ey-its-freg@jorb.com",
        password: "blorp_sucks1234"
    },
];
// A schema is a collection of type definitions that together define the "shape"
// of queries that are executed against the data.
const typeDefs = `#graphql
    type User { 
      id: String
      username: String
      email: String
      password: String
    }
    
    type Query {
      users : [User]
    }
    
    type Query {
    user : User
    }
    
    # The "#graphql" in the beginning provides GraphQL syntax highlighting. Comments in GraphQL strings start with th hash (#) symbol.
    # The "User" type defines the queryable fields for every job in the data source.
    # The "Query" type s special: it lists all the available queries that clients can execute,
    # along with the return type for each. In this case, the "users" query returns an array of
    # zero or more Users (defined above).

  `;
const resolvers = {
    Query: {
        users: () => users,
        user: async (_, { id }, { dataSources }) => {
            return dataSources.usersAPI.getUser(id);
        },
    },
};
import { RESTDataSource } from "@apollo/datasource-rest";
export default class UsersAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://tdep-tadlab-api-713a0d814a93.herokuapp.com/api/v1/';
    }
    async getUser(id) {
        return this.get(`users/${encodeURIComponent(id)}`);
    }
    async getAllUsers() {
        const data = await this.get('users', {
            params: {
                order_by: 'id',
            },
        });
        return data.results;
    }
}
// The ApolloServer constructor requires two parameters: a schema definition and set of resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs the ApolloServer instance as middleware
//  3. prepares the app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                usersAPI: new UsersAPI({ cache }),
            },
        };
    },
    listen: { port: 4000 },
});
console.log(`Server ready at: ${url}`);
