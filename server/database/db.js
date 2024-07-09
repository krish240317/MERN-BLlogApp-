import mongoose from "mongoose"
const Connection = async(username,password) => {
   const URL=`mongodb+srv://${username}:${password}@mycluster.5p9tqws.mongodb.net/?retryWrites=true&w=majority&appName=mycluster`;
    try {
    await mongoose.connect(URL);
    //mongoose.connect('mongodb://127.0.0.1/blog')
    console.log("Database connected successfully");
   } catch (error) {
    console.log("Error while connecting database",error)
   }
}
 
export default Connection;