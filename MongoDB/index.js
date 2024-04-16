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
    // const {name, email, age, dept} = req.body
    // student.insertOne({
    //     name: name,
    //     email: email,
    //     dept: dept,
    //     age: age,
    // })
    // .then(()=>res.status(201).send("Student added succesfully"))
    // .catch((error)=>res.status(500).send(error.message))
    student.insertMany(req.body).then(()=>{
        res.status(201).send("Student adde successfully")
    }).catch(()=>{
        res.status(500).send(error.message)
    })
});

app.get("/student",(req, res, next) =>{
    student.findOne({name: "studentA"}).then((data)=> res.status(200).json(data)).catch((error) => res.status(500).send(error.message))
} );
app.listen(8000, () => {
    console.log("Server is running at port 8000");
});
app.get("/", (req, res) => {
    res.send("This is the home page. Hello!");
});
