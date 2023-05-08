const literalFunc = (value:string, bool:boolean):void =>{
        if(bool){
                console.log(value.toUpperCase())
        }
        else{
                console.log(value.toLowerCase())
        }
}

literalFunc("red",true)