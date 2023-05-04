//arrow function generic type
const createArray = (param:string):string[] =>{
        return [param]
}
const createArray1 = <T>(param:T):T[] =>{
        return [param]
}

interface Name {name:string}
type myArray = number[]

const result1 = createArray1<string>("BD")
const result2 = createArray1<Name>({name:"Tonmoy"})

//multiple generic function

const createArray12 = <X,Y>(param1:X,param2:Y):[X,Y] =>{
        return [param1,param2]
}

const result3 = createArray12<Name,myArray>(
        {name:"t"},[1,2,3]
)


//using spread operator
const crush = "kate"

// const newData = {...myInfo, crush}


const addMeInMyCrushMind = <T>(param:T) =>{
        const crush = "kate"
        const newData = {...param, crush}
        return newData
}
const myInfo = {
        name:"t",
        age:10,
        salary:1999999
}


const result5 = addMeInMyCrushMind(myInfo)

//normal function
function  createArray14<X,Y>(param1:X,param2:Y):[X,Y] {
        return [param1,param2]
}