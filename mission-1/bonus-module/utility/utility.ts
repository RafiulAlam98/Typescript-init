//Pick

interface Person{
        name:string,
        email:string,
        contactNo:number
}

type Contact = Pick <Person , "email" | "contactNo">

//Omit

type Name = Omit <Person, "email" | "contactNo">


//Partial 
//To make all the properties be optional type
 
type  optional = Partial <Person>

//Required

type RequiredProps = Required<Person>


//readonly
const person: Readonly <Person> = {
        name:"Tonmoy",
        email:"abc@gmail.com",
        contactNo:2
}

// person.name= "rafiul"

//record type
// type myObj = {
//         a:string,
//         b:string,
//         c:string
// }

// using index signature
// type myObj = {
//         // [key:string] :string
//         // [key:"a" |"b"] :string
// }

// record
type myObj = Record<string,string> // <key, value>
type myObj1 = Record<"a"|"b"|"c",string> // <key, value>

const obj:myObj = {
        a:"1",
        b:"2",
        c:"3",
        d:"3"
}
