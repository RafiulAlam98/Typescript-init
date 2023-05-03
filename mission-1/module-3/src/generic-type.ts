const rollNumer1:number[] = [1,2,3] 
const rollNumer2:Array<number> = [1,2,3] 

const rollNumer3:string[] = ["1","2","3"] 
const rollNumer4:Array<string> = ["1","2","3"] 

const rollNumer5:boolean[] = [true, false] 
const rollNumer6:Array<boolean> = [true, false] 

const userRollNubmer: Array<{name:string, age:number}> =[
        {
                name:"Tonmoy",
                age:24
        },
        {
                name:"Tonmoy",
                age:24
        },
]


//using generic type
type GenericArray <T> = Array<T>
type GenericObject  = Object

const genericObj :GenericObject ={ name:"f" }

const rollNumer7 :GenericArray<number> = [1,2,3]
const rollNumer8 :GenericArray<string> =  ["1","2","3"] 
const rollNumer9 :GenericArray<boolean> = [true, false]
const rollNumer10 :GenericArray<{name:string, age:number}> = [{
        name:"Tonmoy",
        age:24
},
{
        name:"Tonmoy",
        age:24
},]

// more modified
type NameAge = {name:string, age:number}
const rollNumer11 :GenericArray<NameAge> = [{
        name:"Tonmoy",
        age:24
},
{
        name:"Tonmoy",
        age:24
},]


//generic uses multiple parameters with tuple
type GenericTuple <X,Y> = [X,Y] //can't use Array<X,Y>

interface IRelation {
        name:string,
        salary:number
}

const relationWithSalary: GenericTuple <IRelation,string> = [{
name:"Tonmoy",
salary:100000
}, "kate"] 