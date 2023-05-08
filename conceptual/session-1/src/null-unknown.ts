//null
// const myText = (text: string | null):void =>{
//         console.log(text)
//         if(text === null){
//                 console.log("first")
//         }
//         else{
//                 console.log("second")
//         }
// }

// myText(null)

//unknown type
const guessSomething = (myGuess:unknown) =>{
        console.log(myGuess)
}

guessSomething("23")
guessSomething(undefined)
guessSomething("23")