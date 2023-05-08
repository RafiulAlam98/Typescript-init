const getProperty = <X,Y extends keyof X> (obj1:X, key:Y) =>{
        obj1[key] 
}

const property = getProperty ({name:"hj", age:23},"age")