const express = require('express');
const mongodb = require('mongodb');

const connectionUrl = "mongodb://127.0.0.1/"; // Replace "mydatabase" with your actual database name
const client = new mongodb.MongoClient(connectionUrl);

const app = express();
app.use(express.json());

client.connect()
    .then(() => {
        console.log("Database connection established");
        
        // Start the Express server
        app.listen(8000, () => {
            console.log("Server is running at port 8000");
        });
    })
    .catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("This is the home page. Hello!");
});
