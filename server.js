import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    username: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query { # type Query: get
    allTweets: [Tweet]
    tweet(id: ID): Tweet
  }

  type Mutation { # type Mutation: post, put, delete
    postTweet(text: String, userId: ID): Tweet
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
