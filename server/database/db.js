import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-tsl7wul-shard-00-00.xdtwpid.mongodb.net:27017,ac-tsl7wul-shard-00-01.xdtwpid.mongodb.net:27017, FLIPKART_CLONE/?ssl=true&replicaSet=atlas-d76o95-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {});
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
