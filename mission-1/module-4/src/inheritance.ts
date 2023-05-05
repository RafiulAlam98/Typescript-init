class Person {
        name:string;
        age:number;
        address:string

        constructor(name:string, age:number,address:string){
                this.name=name
                this.age=age
                this.address=address
        }
        makeSleep (hours:number):string{
                return(`${this.name} sleeps for ${hours}`)
        } 
}
class Student extends Person {
      

        constructor(name:string, age:number,address:string){
                super(name,age,address)
        }
        
}
class Teacher extends Person {
        

        constructor(name:string, age:number,address:string){
                super(name,age,address)
        }
        makeSleep (hours:number):string{
                return(`${this.name} sleeps for ${hours}`)
        }
        takeClasses(numberOfClass:number):string{
                return (`${this.name} takes ${numberOfClass} classes`)
        }
}

const student1 = new Student ("Mr X", 15, "Ufa")
const teacher1 = new Teacher ("Mr Y", 56, "Professor")
console.log(teacher1.takeClasses(7))

