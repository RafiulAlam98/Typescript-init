// keyof guard
type Alphaneumeric =number|string

function add (p1:Alphaneumeric, p2:Alphaneumeric):Alphaneumeric{
        if(typeof p1 ==="number" && typeof p2 === "number"){
                return p1 + p2
        }
        else{
            return    p1.toString() + p2.toString()
        }
}

// console.log(add(4,2))

// console.log(add("5","6"))


//key in guard
type NormalUserType = {
        name:string,
}
type AdminUserType = {
        name:string,
        role:string
}

const getUser = (user:NormalUserType|AdminUserType):string =>{
        if("role" in user ){
                return `I am ${user.role}`
        }
        else{
                return `I am normal user`
        }
} 

const normalUser:NormalUserType = {name:"t"}
const adminUser:AdminUserType = {name:"t",role:"admin"}
console.log(getUser(normalUser))
console.log(getUser(adminUser))

//instance of guard
