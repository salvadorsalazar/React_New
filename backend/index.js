import express from "express";
import mysql from "mysql";
import cors from "cors";
tester
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "codeup",
    database:"test"
}) 

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