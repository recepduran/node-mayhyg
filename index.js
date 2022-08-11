const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const router = express.Router();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];

app.use("/", router);

router.get("/", (req,res) =>{
  res.send("oldu sanurum")
})
router.get("/cities", (req,res)=>{
  res.status(200).setHeader('Content-Type', 'application/json').json(cities)
  return json(cities)
})


app.listen(process.env.PORT, () => {
  console.log('server started');
});
