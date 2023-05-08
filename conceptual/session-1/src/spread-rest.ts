//spread operator

const heroArr1:string[] = ["khan", "jalil", "siam"]
const heroArr2:string[] = ["alom", "faruk", "siam"]

heroArr1.push('arefin')
// console.log(...heroArr2)

heroArr1.push(...heroArr2)
// console.log(heroArr1)

const [hero1,hero2,ty,x,y,z] = heroArr1
console.log(hero1,hero2,ty,x,y,z)

//rest parameter // works in parameter

const heroScore = (...score:number[]):number =>{
        let sum:number = 0
        score.map(n =>sum=sum+n)
        return sum 
}

// console.log(heroScore(1,3,5,7,9,101,102,10,1))

const heroString = (...strings:string[]):void =>{
       
        strings.map(n =>console.log(n))
        
}

// heroString("programming", "hero")