import mongoose from "mongoose";

export const startConnection = async () => {
  let connectionString: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;
  
  if (process.env.ENVIRONMENT == 'local') {
    connectionString = `${connectionString}?authSource=admin`
  }
  await mongoose.connect(connectionString);
};
