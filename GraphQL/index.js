const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        teams: [Team],
        team(id: Int): Team,
        equipments: [Equipment],
        supplies: [Supply]
    }
    type Team {
        id: Int
        manager: String
        office: String
        extension_number: String
        mascot: String
        cleaning_duty: String
        project: String
        supplies: [Supply]
    }

    type Equipment{
        id: String
        used_by: String
        count: Int
        new_or_used: String
    }

    type Supply{
      id: String
      team: Int
    }
`
//resolvers 서버에 넘겨주는역할
const resolvers = {
  Query: {
    teams: () => database.teams.map((team)=>{
      team.supplies = database.supplies.filter((supply)=>{return supply.team===team.id})
      return team
    }),
    equipments:() => database.equipments,
    team:(parent, args, context, info) => database.teams.filter((team)=>{
      return team.id===args.id
    })[0]

  }
}

const server = new ApolloServer({ typeDefs, resolvers })
   
server.listen().then(({ url }) => {
console.log(`Server ready at ${url}`)
})