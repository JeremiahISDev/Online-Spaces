import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://OnlineSpaces:135435tmnt@cluster0.i41zk.mongodb.net/myFirstDatabase?retryWrites=true&amp;w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};
let client = new MongoClient(uri, options);
let clientPromise = client.connect();
export default clientPromise;