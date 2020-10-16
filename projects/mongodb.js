const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://traj3ctory:CharMZ06@cluster0.ic2kd.mongodb.net/traj3ctory?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });


client.connect(err => {
  const db = client.db("User");
  // let data = [
  //   { name: 'John', address: 'Highway 71' },
  //   { name: 'Peter', address: 'Lowstreet 4' },
  //   { name: 'Amy', address: 'Apple st 652' },
  //   { name: 'Hannah', address: 'Mountain 21' },
  //   { name: 'Michael', address: 'Valley 345' },
  //   { name: 'Sandy', address: 'Ocean blvd 2' },
  //   { name: 'Betty', address: 'Green Grass 1' },
  //   { name: 'Richard', address: 'Sky st 331' },
  //   { name: 'Susan', address: 'One way 98' },
  //   { name: 'Vicky', address: 'Yellow Garden 2' },
  //   { name: 'Ben', address: 'Park Lane 38' },
  //   { name: 'William', address: 'Central st 954' },
  //   { name: 'Chuck', address: 'Main Road 989' },
  //   { name: 'Viola', address: 'Sideway 1633' }
  // ];


  // db.collection("traj3ctory").insertMany(data, (err, res) => {
  //   console.log(err);
  //   console.log(res.ops);
  //   console.log("Number of inserted count: " + res.insertedCount);
  // })

  // db.collection("traj3ctory").find({}).toArray((err, res) => {
  //   console.log(res)
  // })

  /* =============== Specific Request ======================= */
  // let query = { address: "Sideway 1633" }

  // db.collection("traj3ctory").find(query).toArray((err, res) => {
  //   console.log(res)
  // })

  /* =============== Specific Request ====================== */
  // db.collection("traj3ctory").find({}, { projection: { _id:0, name: 1, address: 1}}).toArray((err, res) => {
  //   console.log(res)
  // })

  /* =============== Regular Expression ====================== */
  // let query = { address: /^S/ }; //value starting with s
  // db.collection("traj3ctory").find(query).toArray((err, res) => {
  //   console.log(res);
  // }) 

  /* =============== Sort ====================== */
  // let query = { name: 1 }; //ascending and -1 for descending
  // db.collection("traj3ctory").find().sort(query).toArray((err, res) => {
  //   console.log(res);
  // })

 /* =============== Delete ====================== */
//  let query = { name: 'Viola' }; //ascending and -1 for descending
//  db.collection("traj3ctory").deleteOne(query, (err, res) => {
//    console.log(res.connection);
//  })

 /* =============== Delete Many ====================== */
//  let query = { address: /^6/ }; //ascending and -1 for descending
//  db.collection("traj3ctory").deleteMany(query,(err, res) => {
//    console.log(res.n);
//  })

 /* =============== Delete Many ====================== */
 let query = { address: /^6/ }; //ascending and -1 for descending
 db.collection("traj3ctory").deleteMany(query,(err, res) => {
   console.log(res.n);
 })

  console.log(err);

  client.close();
});
