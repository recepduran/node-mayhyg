const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const router = express.Router();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cities = [
  { id: 1, name: 'Istanbul', country: 'Turkey' },
  { id: 2, name: 'New York', country: 'USA' },
  { id: 3, name: 'London', country: 'England' },
];

app.use('/', router);

router.get('/', cors(corsOptions), (req, res) => {
  res.send('oldu sanurum');
});
router.get('/cities', cors(corsOptions), (req, res) => {
  res.status(200).json(cities);
});

app.listen(process.env.PORT, () => {
  console.log('server started');
});
