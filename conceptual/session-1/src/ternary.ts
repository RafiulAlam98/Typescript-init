const isHeroAvailable:boolean = true

if(isHeroAvailable){
        console.log("booked now")
}
else{
        console.log("not booked now")
}

//nullish operator //check undefined and null
const inputSomething:unknown = " "
const checkInput = inputSomething ?? "no input"
console.log(checkInput)

//null - no input
//undefined - no input
//hello=hello
//4=4
//true=true
// " " = empty