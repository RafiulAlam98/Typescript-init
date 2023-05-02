const myTuple:[string,number] = ["john",10]
myTuple[1] = 10
myTuple.shift()
console.log(typeof(myTuple))

type user = [number, string, boolean]
type employee = [number,string][]

const users : user = [1,"Tonmoy", true]
const employees = [[2,"Tonmoy"], [1,"Rafiul"]]
console.log(employees[1][1])
