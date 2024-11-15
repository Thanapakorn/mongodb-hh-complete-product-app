import { MongoClient } from "mongodb";

const conextionString = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(conextionString, {
  useUnifiedTopology: true,
});
await client.connect();
export const db = client.db("practice-mongo");
