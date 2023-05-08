//type alias
type HeroIncomeType = number | string
const heroIncome:HeroIncomeType = "34";

type Hero ={
        name:string,
        age:number
        }
       
const hero4:Hero ={
        name:"Tonmoy", age:32
}
const hero5:Hero ={
        name:"Tonmoy", age:32
}
const hero6:Hero ={
        name:"Tonmoy", age:32
}

//interface
// interface Z number // can not be declared

interface HeroInterface {
        name:string,
        age:number
}
type HeroType1 = {
        name:string,
        age:number
}
const hero7:HeroType1 = {
        name:"siam",
        age:23
}
type ABC  = number
