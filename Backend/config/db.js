const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/newtodo");

connection.on("open", () => {
    console.log("✅ Database connected successfully");
});

connection.on("error", (err) => {
    console.error("❌ Database connection error:", err);
});

module.exports = connection;