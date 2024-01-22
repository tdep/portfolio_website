import { users } from "../data/users";
// Resolvers define how to fetch the types defined in the schema.
export const resolvers = {
    Query: {
        users: () => users,
        user: async (_, { id }, { dataSources }) => {
            return dataSources.usersAPI.getUser(id);
        },
    },
};
