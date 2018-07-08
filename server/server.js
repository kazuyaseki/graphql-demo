const { ApolloServer, gql } = require('apollo-server');
const casual = require('casual');

const typeDefs = gql`
  type Query {
    candidate: Candidate
  }

  type Candidate {
    id: ID
    name: String
    age: Int
    address: String
    job: Job
  }

  type Job {
    id: ID
    name: String
    years: Int
  }

`;

const mocks = {
  Candidate: () => ({
    name: casual.name,
    age: () => casual.integer(15, 120),
    address: casual.address
  }),
  Job: () => ({
    name: casual.company_name,
    years: () => casual.integer(0, 100)
  })
};

const server = new ApolloServer({
  typeDefs,
  mocks
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
