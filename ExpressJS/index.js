const express = require("express");

const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
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
app.get("/users/:UserId", (req, res) => {
   let { UserId } = req.params;
   console.log(req.query);
   console.log(UserId);
   res.send('user ' + UserId +' details');
});

const admin = express. Router();
const student = express. Router();
app.use("/admin", admin);
app.use("/student", student);
admin.get("/home", (req, res, nex) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Admin home route");
});
student.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Student home route");
});
app.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Common home route");
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
app.get("/example2", (req, res) => {
    const { email } = req.cookies;
    res.cookie( "email","test@gmail.com");
    res.cookie('name', 'test');
    console.log(email);
    res.send("Example route");
    //You can clear cookie by method clearCookie('name');

});

// redirect
app.get("/test1", (req, res) => {
    res.set('title', 'test');
    res.send("Test response");
    });
app.get("/example3", (req, res) => {

    res.redirect("/test1");
    });
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

app.get('/example4', (req, res)=>{
    res.render('pages/home.ejs', { name: "Kunal", email: "kunalarayu@gnoidef.com"});
})



app.get("/example5", (req, res) => {
    res.format({
    "text/plain": () => {
    res.send("Plain text response");
    },
    "application/json": () =>{
    res.json({name: "Jahid", email: "jahid@xxyz.com"})
    },
    "text/html": () => {
    res.render("pages/home.ejs");
    },
    default: () => {
    res.send("Nothing matched")
    }
    }); 
    });

const middleware1 = (req, res, next) => {
    console.log("Middleware 1");
    next();
};
const middleware2 = (req, res, next) => {
    console.log("Middleware 2");
    res.send("Response from middleware 2");
    next();
};
const middleware3 = (req, res, next) => {
    console.log("Middleware 3");
    next();
    };
const middleware4 = (req, res, next) => {
    console.log("Middleware 4");
    next();
};
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.use(middleware4);



app.get("/users", (req, res)=>{
    res.send('user list');
});