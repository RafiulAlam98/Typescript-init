//intersection
type HeroTypeA = {
        name:string
        age:number
}
type HeroTypeB = HeroTypeA &{
        position:string
        salary:number
}

const HeroData:HeroTypeB ={
        name:"jalil",
        age:23,
        salary:4567,
        position:"developer"
}

// Union

const myFavHero:HeroTypeA | HeroTypeB ={
        name:"khan",
        age:30,
        salary:567,
        position:"actor"
}