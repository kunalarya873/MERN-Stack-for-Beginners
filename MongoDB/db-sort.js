 db.inventory.find({"status": 1}).sort( {qty: -1 } );
 db.inventory.find().skip(1)//skip 1 document
 db.inventory.find().skip(20); //skip 20 document
 
 db.inventory.find().limit(1) // Limits the number of documents in the output to 1
    db.inventory.find().limit (2) // Limits the number of documents in the output to 2