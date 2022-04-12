const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "192.18.142.21",
  user: "team",
  password: "Team12345678@",
  database: "beautyspa",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL DB");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Node.js");
});

app.post("/create-users-table", (req, res) => {
  db.query(
    "create table if not exists users(id int auto_increment, name varchar(255), primary key(id))",
    (err) => {
      if (err) throw err;
        return res.json({
            status: "Request has been completed",
            code: 200
        })
    }
  );
});
