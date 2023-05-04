interface MyInfo{
        name:string,
        age:number,
        other:string               
        salary:number,
}

const addMeInMyCrushMind1 = <T extends {name:string,age:number,salary:number}>(param:T) =>{
        const crush = "kate"
        const newData = {...param, crush}
        return newData
}
const myInfo1:MyInfo= {
        name:"t",
        age:10,
        salary:1999999,
        other:"other"
}


const result51 = addMeInMyCrushMind1(myInfo1)
console.log(result51)