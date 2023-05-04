// import fetch from "node-fetch"

//mocking
const makePromise = () =>{
     return   new Promise<string>((resolve,reject) =>{
                const data:string = 'Data is fetched'
                if(data){
                        resolve(data)
                }
                else{
                        reject("failed to fetch data")
                }
        })
}

const getPromiseData =async () =>{
        const data = await makePromise()
        console.log(data)
        return data
} 

// Promise<string> Promise<boolean> Promise<object>

const makePromiseBoolean = () =>{
        return   new Promise<boolean>((resolve,reject) =>{
                   const data:boolean = true
                   if(data){
                           resolve(data)
                   }
                   else{
                           reject("failed to fetch data")
                   }
           })
   }
   const getBooleanPromiseData =async () =>{
        const data = await makePromiseBoolean()
        console.log(data)
        return data
} 
interface PromiseObject {
        data:string
}

const makePromiseObject = ():Promise<PromiseObject> =>{
        return   new Promise<PromiseObject>((resolve,reject) =>{
                   const data:PromiseObject = {data:"data is fetched"}
                   if(data){
                           resolve(data)
                   }
                   else{
                           reject("failed to fetch data")
                   }
           })
   }

   const getObjectPromiseData =async () =>{
        const data = await makePromiseObject()
        console.log(data)
        return data
} 

//call fetch api

type ITodo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      }

const getTodo = async ():Promise<ITodo> =>{
        const response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
        return await response.json();
        
}

const getTodoData =async ():Promise<void> =>{
        const result =await getTodo()
        console.log(result)
   
}

getTodoData()