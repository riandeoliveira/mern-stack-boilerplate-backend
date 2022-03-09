import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE,
} = process.env;

const port = PORT || 5000;
const mongoUri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.kztfk.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

export default {
  port,
  mongoUri,
};
