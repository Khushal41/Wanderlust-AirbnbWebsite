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
    try {
        await Listing.deleteMany({});
        initData.data = initData.data.map((obj) => ({
            ...obj,
            owner: "6739d67b85d31617bee70f50",
        }));
        await Listing.insertMany(initData.data);
        console.log("Data was initialized");
    }
    catch (error) {
        console.error("Error initializing data:", error);
    }
};


// const modifiedData = initData.data.map((obj) => ({
//     ...obj,
//     owner: "6739d67b85d31617bee70f50",
// }));

// } catch (error) {
//     console.error("Error initializing data:", error);
// }