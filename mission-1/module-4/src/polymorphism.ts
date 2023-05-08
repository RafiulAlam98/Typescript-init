class Man{
        takeNap () {
                console.log("Man is sleeping 7 hours per day")
        }
}
class Woman extends Man{
        takeNap () {
                console.log("Woman is sleeping 12 hours per day")
        }
}
class Baby extends Man{
        takeNap () {
                console.log("Baby am sleeping 17 hours per day")
        }
}

function getNap(param:Man){
        param.takeNap()
}

const person1 = new Man()
const person2 = new Woman()
const person3 = new Baby()

getNap(person1)
getNap(person2)
getNap(person3)

class Shape {
        getArea():number{
                return 0
        }
}
class Circle extends Shape {
        radius :number
        constructor(radius:number){
                super()
                this.radius = radius
        }
        getArea():number{
                return Math. PI * this.radius *this.radius
        }
}
class Rectangle extends Shape {
        height :number;
        width:number
        constructor(height:number,width:number){
                super()
                this.height = height
                this.width = width
        }
        getArea():number{
                return this.height * this.width
        }
}

function getAreaShape (param:Shape):number {
        return param.getArea()
}

const circle  = new Circle(10)
const rectangle  = new Rectangle(10,12)

console.log(getAreaShape(new Circle(10)))
console.log(getAreaShape(rectangle))