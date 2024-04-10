const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("This is home page");
});
app.get("/example", (req, res, next) => {
    res.send("This is get method");
    let { name, email} = req.body;
    console.log(name);
    console.log(email);
});
app.get("/users", (req, res)=>{
    res.send('user list');
});
app.get("/users/:id", (req, res) => {
   console.log(req.params);
   res.send('user details');
});
// app.post("/example", (req, res, next) => {
//     res.send("This is post method");
// });
// app.put("/example", (req, res, next) => {
//     res.send("This is put method");
// });
// app.patch("/example", (req, res, next) => {
//     res.send("This is patch method");
// });
// app.delete("/example", (req, res, next) => {
//     res.send("This is delete method");
// });
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});