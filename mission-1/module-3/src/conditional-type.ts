type a1 = number
type a2 = boolean
type a3 = number

type d = a1 extends undefined ? undefined : a2 extends null ? null : a3 extends null ? null : never

type Sheikh = {
        wife1:string,
        wife2:string
}

// type A = keyof Sheikh 

// type checkProperty<T,K> = K extends {wife1:string} ? true : false
// type checkWife = checkProperty<Sheikh,"wife1">  

type Bandhubi = "A" | "B" | "C"
type removeBa<T,K> = T extends K ? never : T
type currentBa = removeBa<Bandhubi, "C">