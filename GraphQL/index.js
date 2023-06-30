const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        teams: [Team],
        team(id: Int): Team,
        equipments: [Equipment],
        supplies: [Supply],
    }

    type Mutation {
      insertEquipment(id: String, used_by: String, count:Int, new_or_used:String, aa:Int): Equipment
      deleteEquipment(id: String): Equipment
      editEquipment(id: String used_by: String, count: Int, new_or_used: String, aa: Int): Equipment
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
        aa: Int
    }

    type Supply{
      id: String
      team: Int
    }
`
//resolvers 서버에 넘겨주는역할
const resolvers = {
  Query: { //query는 조회
    teams: () => database.teams.map((team)=>{
      team.supplies = database.supplies.filter((supply)=>{return supply.team===team.id})
      return team
    }),
    equipments:() => database.equipments,
    team:(parent, args, context, info) => database.teams.filter((team)=>{
      return team.id===args.id
    })[0]
  },

  Mutation:{ //삽입삭제갱신 조작
    insertEquipment:(parent, args, context, info) => { 
      database.equipments.push(args) //배열으로들어오니 push로한다.
      return args
    },
    deleteEquipment:(parent, args, context, info) => {
      const deleted = database.equipments.filter((equipment) => {
        return equipment.id===args.id
      })[0] //[0]은 하나만삭제 id같은거 반환

      database.equipments = database.equipments.filter((equipment) => {
        return equipment.id!==args.id
      }) //id값이 같지않은것들을 보여준다

      return deleted
    },
    editEquipment:(parent, args, context, info) => {
      return database.equipments.filter((equipment)=>{
        return equipment.id===args.id
      }).map((equipment) => {
        Object.assign(equipment, args) //Object에 assign(할당)
        return equipment
      })[0]
    }
  },
 
}

const server = new ApolloServer({ typeDefs, resolvers })
   
server.listen().then(({ url }) => {
console.log(`Server ready at ${url}`)
})