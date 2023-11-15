import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloh4ar361e1501ui05zodvmd/master",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
