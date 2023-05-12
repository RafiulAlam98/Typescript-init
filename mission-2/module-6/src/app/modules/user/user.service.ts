import User from "./user.model";

export const createUserToDb =async () =>{
        const user = await new User({
                id:'7890',
                role:"student",
                password:'jhalkanaka',
                name:{
                        firstName:'Rafiul ',
                        lastName:'Tonmoy',
                        middleName:'Alam'
                },
               
                gender:"male" ,
                email:'abc@gmail.com',
                contactNo:'01777777',
                emergencyContactNo:'090109',
                presentAddress:'uganada',
                permannetAddress:'usa'
        
        });
              await user.save();
              console.log(user)
              return user
      }

export const getUsersFromDb = async() =>{
        const users = await User.find({})
        return users
}