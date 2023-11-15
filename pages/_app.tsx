import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../apollo-client";
// base css file
// import "@styles/scrollbar.css";
// import "@styles/swiper-carousel.css";
// import "@styles/custom-plugins.css";
import "@/styles/tailwind.css";
import "@/styles/themes.scss";
export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
