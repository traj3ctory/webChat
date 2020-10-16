let mysql = require('mysql');

let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "node"
});

// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected!");

//     let sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255))";

//     con.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("Result: ", result);
//     });
// });

con.connect((err) => {
    if (err) throw err;
    console.log("Connected!");

    let sql = "INSERT INTO user (first_name, Last_name) VALUES ('Hello', 'World')"

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ", result);
    });
});