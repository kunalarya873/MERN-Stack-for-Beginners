const express = require('express');
const mongodb = require('mongodb');

const connectionUrl = "mongodb://localhost:27017/"; // Replace "mydatabase" with your actual database name
const client = new mongodb.MongoClient(connectionUrl);

const db = client.db("schoolDb");
const student = db.collection("student");

const app = express();
app.use(express.json());

client
    .connect()
    .then(() => {
        console.log("Database connection established");
        
        // Start the Express server
    })
    .catch(error => console.log(error));

app.post("/student", (req, res, next)=>{
    student.insertOne({
        name: "Arya",
        class: "A",
        dept: "mech",
        day: "Tues",
    })
    .then(()=>res.status(201).send("Student added succesfully"))
    .catch((error)=>res.status(500).send(error.message))
});
app.listen(8000, () => {
    console.log("Server is running at port 8000");
});
app.get("/", (req, res) => {
    res.send("This is the home page. Hello!");
});
