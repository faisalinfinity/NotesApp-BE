const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { LoginRoute } = require("./Routes/LoginRoute");
const { RegisterRoute } = require("./Routes/RegisterRoute");
const connection = require("./Connection/connection");
const { AlluserRoute } = require("./Routes/AlluserRoute");
const { NotesRoute } = require("./Routes/NotesRoute");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/users",AlluserRoute)
app.use("/notes",NotesRoute)


mongoose.connect(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => {
    console.log('Server started on port 8080');
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

// app.listen(, async () => {
//   try {
//     await connection;
//     console.log("Connected to MONGO",`Running on PORT ${process.env.PORT}`);
//   } catch (error) {
//     console.log(error);
//   }
// });
