// ternary operator
const age:number = 19

const isAdult = age > 18 ? "yes" : "no"
console.log(isAdult)

// nullish coeslancing oprator 
// const isAuthenticatedUser = null;
// const userName = isAuthenticatedUser ?? "guest"

type Manush = {
        fname:string,
        age:number,
        address:{
                city:string,
                country:string
                home?:string
        }
}

const manush1:Manush={
        fname:"Tonmoy",
        age:12,
        address:{
                city:"No city",
                country:"No coutry"
        }
}

console.log(manush1?.address?.home ?? "My home")