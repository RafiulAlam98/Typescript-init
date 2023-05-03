interface CrushInterface<T,U, V> {
        name:string,
        husband:T,
        wife?:U,
        other:V
}

interface IHusband {name:string,salary:number}
interface IWife {name:string, age:number}
interface IOther {other:string,etc:number}

const myCrush:CrushInterface<IHusband,IWife, {}> = {
        name:"tonmoy", 
        husband:{
                name:"h",
                salary:1000
        },
        wife:{
                name:"k",
                age:10
        },
        other:{
                other:"j",
                etc:1
        }
} 



