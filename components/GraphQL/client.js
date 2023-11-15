import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../../apollo-client";
export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div {...delegated}>{children}</div>
    </ApolloProvider>
  );
}
