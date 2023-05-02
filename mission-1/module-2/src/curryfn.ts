const multiply = (a:number, b:number, c:number):number =>{
        return a * b * c 
}

console.log(multiply(4,5,6))

const curriedMultiply = (a:number) =>{
        return (b:number)=>{
                return (c:number)=>{
                        return a* b*c
                }
        }
}

const step1 = curriedMultiply(6)
const step2 = step1(7)
const step3 = step2(8)

console.log
console.log(curriedMultiply(5)(6)(7))