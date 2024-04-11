//for starting the server type 
// mongod --dbpath users/kunalarya/db
// run "mongosh" shell cmd for mongodb database here you can add or delete the query
// show dbs
// use employees

db.products.insertOne({
    item: "card", qty: 15
});
db.products.insertMany( [
    { item: "card", qty: 15 },
    { item: "envelope", qty: 20 },
    { item: "stamps" , qty: 30 }
 ] );