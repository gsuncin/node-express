import mongoose from "mongoose"

mongoose.connect("mongodb://root:root@localhost:27017/node-express")

let db = mongoose.connection;

export default db;

