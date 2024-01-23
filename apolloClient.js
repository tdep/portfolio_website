import { ApolloClient, InMemoryCache } from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
})

const client = new ApolloClient({
  uri: 'http:localhost:8080',
  cache: new InMemoryCache(),
});

export default client;