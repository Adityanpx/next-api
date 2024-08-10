const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
export const connectionStr = `mongodb+srv://${username}:${password}@cluster0.pu1oq.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`;
