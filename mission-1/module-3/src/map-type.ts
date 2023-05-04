const arrayOfNumbers = [1,2,3] //[1,2,3]
const arrayOfStrings = arrayOfNumbers.map(num=>num.toString())
console.log(arrayOfStrings)

type AreaNumber = {
        height:number,
        width:number
}

type AreaString = {
        height:number,
        width:number
}



type A = AreaNumber["width"]
type B = keyof AreaNumber //"width" | height