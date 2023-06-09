import mongoose from "mongoose";

export const mongoDb=async ()=> {
    try {
    await mongoose.connect("mongodb://localhost/BASEDATOS")
        console.log("mongo conectada");
    } catch (error) {
        console.log(error);
    }
}