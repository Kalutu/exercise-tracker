const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

//Database connection
let mongoose = require('mongoose');
mongoose.connect(process.env['MONGODB_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

let exerciseSessionSchema = new mongoose.Schema({
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: String
});

let userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  log: [exerciseSessionSchema]
});

let Session = mongoose.model('Session', exerciseSessionSchema);
let User = mongoose.model('User', userSchema);

let bodyParser = require('body-parser');

app.post('/api/users', bodyParser.urlencoded({ extended: false }), function(req,res){
  let newUser = new User({username: req.body['username']});
  newUser.save(function(error,data){
    if(!error){
      let userObject={};
      userObject['username'] = data.username;
      userObject['_id'] = data.id;
      res.json(userObject);
    }
  })
});

app.get('/api/users', function(req, res){
   User.find({},function(err,data){
    if(!err){
      res.json(data);
    }
  });
});
