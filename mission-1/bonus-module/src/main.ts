import Methods from "./utils/index"

const add = (param:number,param2:number,param3:number):number =>{
        return param + param2
}

const res = Methods.add2(6,8)
const res2 = Methods.subtract(6,8)
const res3 = Methods.multiply(6,8)
const res4  = Methods.average(7,8)
console.log(res)