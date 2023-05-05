type PersonType = {
        name:
string,
age:number
}

type newType = "name" | "age"
type newKeyOfType = keyof PersonType

const a: newKeyOfType ="age"

