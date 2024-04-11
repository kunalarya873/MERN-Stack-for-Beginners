const express = require('express');
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("This is home page Hello");
});
app.listen(8000, ()=>{
    console.log("Port is running at 8000");
});