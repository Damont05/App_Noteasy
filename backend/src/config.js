import { config } from "dotenv";
config(); // load .env file, if it exists.

export const MONGODB_URI = process.env.MONGODB_URI || MONGODB_URI;