class Animal {
        // public name:string;
        // public species:string;
        // public sound:string

        //parameter properties

        constructor(public name:string, public species:string,public sound:string){
                // this.name = name
                // this.species = species
                // this.sound =sound
        }

        public makeSound() {
                console.log(`The ${this.name} says ${this.sound}`)
        }
}

const dog = new Animal("German Shephard", "dog", "hello")
const cat = new Animal("Cat","Cat", "hi")

dog.makeSound()
cat.makeSound()