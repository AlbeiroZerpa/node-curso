const express = require("express");
const { phone } = require("phone");
const bodyParser = require('body-parser');
const apiv1 = require('./routes/v1/')

const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiv1(app);

app.use((req, res)=>{
  res.status(404).send("Not Found")
})

app.listen(PORT, () => {
  console.log("running on " + PORT);
});
