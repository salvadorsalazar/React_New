import express from "express";
import mysql from "mysql";
// import cors from "cors";
//test
const app = express();
// app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "codeup",
    database:"test"
}) 

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'codeup';
// 

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM  books";
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });

});

app.listen(8800, () => {
  console.log("Connected to backend.");
});