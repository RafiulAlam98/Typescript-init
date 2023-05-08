const compareArrays = (a:number[], b:number[]):boolean | number[] => {
        let newarr:number[] = []
        if (a.length !== b.length) return false;
        else {
          for (let i = 0; i < a.length; i++) {
            for(let j= 0; j < b.length; j++){
                if(a[i] === b[j]){
                     newarr.push(...newarr,a[i])    
                }
            }
          }
          return newarr;
        }
      };


const arr1 = [1,2,3,6]
const arr2 = [2,3,4,7]
const newArray = compareArrays(arr1,arr2)
console.log(newArray)



