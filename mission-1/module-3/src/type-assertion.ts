let empCode: any = 111
let employeeCode = <number> empCode;
console.log(typeof(employeeCode))

type Student = [string,number]
        

const student =  <Student>{}
student[0] = "Rohit"
student[1] = 123
console.log([student])