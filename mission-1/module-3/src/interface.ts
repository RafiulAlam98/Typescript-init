// type alias use primitives
type User = {
        name:string,
        age:number
}
const userWithTypeAlias:User = {
        name:"Type alias",
        age:100
}

//type alias extends by union 
type ExtendedUser = User & {
        role:string
}
const myUser: IExtendeduser ={
        name:"Type alias",
        age:100,
        role:"developer"
}

//interface object data 
interface IUser  {
        name:string,
        age:number
}

const userWithInterface:IUser ={
        name:"Type alias",
        age:100
}

// interface extends by extends keyword
interface IExtendeduser extends IUser{
        role:string
}

const user: ExtendedUser ={
        name:"Type alias",
        age:100,
        role:"developer"
}

// functional type alias
type AddNumber = (num1:number,num2:number) => number

const addNumber:AddNumber = (num1,num2)=>{
        return num1+num2
}

// functional interface uses colon (:) for return type in function 
interface IAddNumber {
        (num1:number,num2:number):number
}

const iAddNumber: IAddNumber = (num1,num2) =>{
        return num1 + num2
}


//array is special type of object uses type alias
type RollNumbers = number[]
const rollNumbers:RollNumbers = [1,23,3]

//array uses interface 
interface IRollNumber {
        // this process is called index signature
        [index:number]:number // index is always a number but holding value can be different
}

const iAddNumbers:IRollNumber = [1,3]