import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    fetch,
});

const ssrMode = typeof window === 'undefined';

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    ssrMode: ssrMode,
});

export default client;
