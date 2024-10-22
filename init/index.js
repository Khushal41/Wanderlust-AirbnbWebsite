const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlustDataBase";

main()
    .then(() => {
        console.log("Connected to DB");
        initDB(); // Call initDB after successfully connecting to DB
    })
    .catch((err) => {
        console.error("Error connecting to DB:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initDB.data);
    console.log("Data was initialized");
}

initDB();