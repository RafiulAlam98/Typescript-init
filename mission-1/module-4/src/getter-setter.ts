class BankAccount {
        id:number;
        name:string;
       private _balance:number

        constructor(id:number, name:string, balance:number){
                this.id =id,
                this.name= name
                this._balance = balance
        }
        get balance ():number {
                return this._balance
        }
       
        getBalance () {
                console.log(`My current balance is ${this._balance}`)
        }
        // addDeposit (amount:number) {
        //         this._balance = this._balance + amount
        // }
        set deposit (amount:number) {
                this._balance = this._balance + amount
        }

}

// class StudentAccount extends BankAccount {
//         test () {
//         this._balance
//         }
       
// }

const myAccount = new BankAccount (444, "tonmoy",20)

console.log(myAccount.balance)
 myAccount.deposit = 30
 console.log(myAccount.balance)

