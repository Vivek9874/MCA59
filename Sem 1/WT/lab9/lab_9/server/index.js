import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import parser from "body-parser";

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://vivek69:vivek6969@cluster0.hmybpuy.mongodb.net/?retryWrites=true&w=majority",
    {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const studSchema = new mongoose.Schema({
  uid: { type: Number, unique: true },
  name: { type: String },
  email: { type: String, unique: true },
  percent: { type: Number },
  addr: { type: String },
});

const Student = mongoose.model("student", studSchema);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.post("/insert", (req, res) => {
  const { uid, name, email, percent, addr } = req.body;
  Student.findOne({ uid: uid }).then(async (exists) => {
    if (exists) {
      res.send("Id already exists " + exists);
    } else {
      const student = new Student({
        uid,
        name,
        email,
        percent,
        addr,
      });
      try {
        student.save().then(() => {
          res.status(200).redirect("http://localhost:4200/view");
        });
      } catch (err) {
        res.status(500).send("Something went wrong. " + err.message);
      }
    }
  });
});

app.get("/view", async (req, res) => {
  try {
    const allStudents = await Student.find();
    res.json(allStudents);
  } catch (err) {
    res.status(500).send("Something went wrong. " + err);
  }
});

app.post("/update", async (req, res) => {
  const {uid, name, percent, email, addr, studentID} = req.body
  try{
  Student.findOne({ _id: studentID}).then(async (stud) => {
    if(stud){
      res.setHeader("Access-Control-Allow-Origin", "*");
      stud.uid = uid
      stud.name = name
      stud.email = email
      stud.percent = percent
      stud.addr = addr
      stud.save()
      .then(() => {
        res.status(200).redirect(`http://localhost:4200/view`);
      })
      .catch(err => {
        res.status(500).send("Something went wrong. "+ err);
      })
    }
    else{
      res.status(404).send("Could not find student");
    }
  })
  }
  catch(err){
    res.status(500).send("Something went wrong. " + err)
  }
});

app.get("/update/:id", (req, res) => {
  try {
    Student.findById(req.params.id).then((student) => {
      res.json(student);
    });
  } catch (err) {
    res.status(500).send("Something went wrong. " + err);
  }
});

app.post("/delete/:id", (req, res) => {
  const studentID = req.params.id;
  res.send(studentID)
})

app.delete('/delete/:id', async (req, res) => {
  const studentID = req.params.id;

  try {
    const deletedStudent = await Student.findByIdAndDelete(studentID);
    if (deletedStudent) {
      res.status(200).send(`Student deleted successfully!`);
    } else {
      res.status(404).send(`Student with ID ${studentID} not found`);
    }
  } catch (err) {
    res.status(500).send(`Error deleting student with ID ${studentID}: ${err.message}`);
  }
});


export default Student;
