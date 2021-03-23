const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "chs_club_access",
  host: "localhost",
  password: "chs_club_access_password",
  database: "testdatabase",
});

app.post("/create", (req, res) => {
  const btitle = req.body.btitle;
  const bauthor = req.body.bauthor;
  const fnominee = req.body.fnominee;
  const snominee = req.body.snominee;
  const tnominee = req.body.tnominee;
  const becamecp = req.body.becamecp;
  
  db.query(
    "INSERT INTO cp_master_list (title, author, first_nominee, second_nominee, third_nominee, became_cp) VALUES (?,?,?,?,?,?)",
    [btitle, bauthor, fnominee, snominee, tnominee, becamecp],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Added Book Successfully");
      }
    }
  );
});

app.get("/books", (req, res) => {
  db.query("SELECT * FROM cp_books", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
