type NoobDeveloper = {
        name: string
}

// intersection
type JuniorDeveloper = NoobDeveloper & {
        
        expertise:string,
        experience:number
}

type NextLevelDeveloper = JuniorDeveloper & {
        leaderShipExperience: number
}

// Union
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
        name:"tonmoy",
        expertise:"JavaScript",
        experience:1,
       
}
const developer: NextLevelDeveloper = {
        name:"tonmoy",
        expertise:"JavaScript",
        experience:1,
        leaderShipExperience:1,
        
       
}
console.log(newDeveloper, )
console.log(developer)