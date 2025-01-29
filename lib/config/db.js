import mongoose from "mongoose";

export const ConnectDB = async () => { 
    try {
        await mongoose.connect('mongodb+srv://rameshpeshala:Peshala84@cluster0.8biqk.mongodb.net/blog-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error.message);
    }
};
