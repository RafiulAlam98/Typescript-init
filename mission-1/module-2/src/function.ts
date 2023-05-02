//normal function
//default parameter

function add (num1:number, num2:number=10){
        return num1 + num2 
}

// console.log(add(30)) //default parameter


//arrow function 
const addArrow = (num1:number, num2:number):number=>num1+num2

const arr = [1,4,5]
const newArr = arr.map((elem:number)=>elem * elem)

//normal function method
const person:{
        name:string,
        balance:number,
        getBalance(money:number):void
} ={
        name:"Tonmoy",
        balance:5,
        getBalance(money:number){
               return `My new balance is ${this.balance + money} ` 
        }
}


//spread operator
const friends:string[] = ["hoe", "john", "toe"]
const newFriends:string[] =["doe", "filip"]

friends.push(...newFriends)
// console.log(friends)

//rest operator
const greetFriends = (...friends:string[]):void =>friends.forEach(friend=> console.log(`Hi ${friend}`))

// greetFriends("Habul","Babul","kabul", "bangla bhai")


// array and object destructuring

const myFriends:string[] = ["Habul","Babul","kabul", "bangla bhai"]
const myBestFriends  = {
        fullName: "Abul",
        age:23
}
const [bestfriend] = myFriends
const {fullName} = myBestFriends
console.log(bestfriend +" " + `hello`)
console.log(fullName)





