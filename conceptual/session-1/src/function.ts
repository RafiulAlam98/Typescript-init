function heroNormalFunc (a:number,b:number):string {
        const sum = a + b
        return `Sum : ${sum}`
}

const hero = heroNormalFunc(2,3)
// console.log(hero)

const heroArrowFunction = (c:number,d:number):number =>{
        return c+d
}

const arrow = heroArrowFunction(2,3)
console.log(arrow)
