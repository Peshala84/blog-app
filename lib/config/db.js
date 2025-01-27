import mongoose from "mongoose";

 export const ConnectDB = async () => { 
    await mongoose.connect('mongodb+srv://rameshpeshala:Peshala84@cluster0.8biqk.mongodb.net/blog-app')
    console.log('Database connected');
}