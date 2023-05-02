const discount = (disc:number) =>{
        return (price:number):number =>{
                return price - price * disc
        }
} 

const tenPercentDiscount = discount(.1) //partial function 
const twentyPercentDiscount = discount(.2)
const customerD1 = tenPercentDiscount(500)
const customerD2 = twentyPercentDiscount(1500)

console.log(customerD1)
console.log(customerD2)