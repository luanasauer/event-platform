import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4o9duhe196l01xr90frb2u8/master',
    cache: new InMemoryCache()
})