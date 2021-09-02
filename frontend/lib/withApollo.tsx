import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import nextWithApollo from "next-with-apollo";
import { useRouter } from "next/router";

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === "undefined", //nodejs는 window object가 없음
      link: new HttpLink({
        uri: "http://localhost:1337/graphql",
      }),
      headers: {
        ...(headers as Record<string, string>), //쿠키같은 거 저장
      },
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
