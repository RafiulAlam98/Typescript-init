// object alias type
type CrushType = {
        name:string,
        age?:number,
        address:string,
        profession:string
}

const crush1:CrushType = {
        name:"Tamanna",
        address:"Dhaka",
        profession:"Web Developer"
}

console.log(crush1)

// string alias type
type CourseNameType = string;
const myCourse:CourseNameType = "Next Level Web Development"
console.log(myCourse)

// boolean alias type
type CrushMarriedType = boolean
const crush2:CrushMarriedType = false
console.log(crush2)
 

//function type alias [flexible function]
/*const calculate =(numb1:number, numb2:number, operation:(x:number, y:number)=>number) =>{
        return operation(numb1,numb2)
}

console.log(calculate(10,20,(x,y)=>x+y))
console.log(calculate(10,20,(x,y)=>x-y))
console.log(calculate(10,20,(x,y)=>x*y))

*/

//using operation type
type OperationType = (x:number, y:number)=>number


const calculate =(numb1:number, numb2:number,operation:OperationType ) =>{
        return operation(numb1,numb2)
}

console.log(calculate(10,20,(x,y)=>x+y))
console.log(calculate(10,20,(x,y)=>x-y))
console.log(calculate(10,20,(x,y)=>x*y))