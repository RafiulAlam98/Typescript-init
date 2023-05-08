const arrayOfNumbers = [1,2,3] //[1,2,3]
const arrayOfStrings = arrayOfNumbers.map(num=>num.toString())
console.log(arrayOfStrings)

type AreaNumber = {
        height:number,
        width:number
}

type AB = AreaNumber["height"] //lookup types //number [accessing type property]
type BC = keyof AreaNumber //"number" | "number"

type AreaReadOnly ={
        readonly height:number
        readonly width:number
}

type AreaString = {
        height:number,
        width:number
}

const rectangularArea:AreaReadOnly ={
        height:10,
        width:10
} 
// rectangularArea.width =12 //can not assign readonly value

type A = AreaNumber["width"]
type B = keyof AreaNumber //"width" | height


type Volume = {
        height:number
        width:number
        depth:number
}

type Area = {
        [key in "height" | "width"]:boolean
}
type Area1 = {
        [key in keyof Volume]:number
}
type Area2 = {
        [key in keyof Volume]:Volume[key]
}
//generic type
type Area3<T> = {
     readonly [key in keyof T]:T[key]
}

const area1:Area3<{height:string, width:string}> = {height:"j",width:"l"}

