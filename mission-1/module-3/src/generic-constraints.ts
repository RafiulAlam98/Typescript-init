interface MyInfo {
        name:string,
        age:number,
        salary:number,
        other1:false,
        other2:null
}

interface MandatoryInterface {
        name:string,
        age:number,
        salary:number,
}
const addMe = <T extends MandatoryInterface>(myInfo:T) => {
        const crush = "Kate"
        const newData = {...myInfo,crush}
        return newData
}



const myInfo1:MyInfo = {
        name:"Me",
        age:35,
        salary:1000,
        other1:false,
        other2:null

}

const info = addMe<MyInfo> (myInfo1)
console.log(info)