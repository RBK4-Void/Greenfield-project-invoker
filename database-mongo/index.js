//include mongoose in our project
//open a connection to the patient database on our locally running instance of MongoDB.
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/patient');
//Add Mlab Database
// mongoose.connect('mongodb://Mohammad:1234@ds161539.mlab.com:61539/medical-records');

//now we need to get notified if we connect successfully or if a connection error occurs:
var db = mongoose.connection;
//connection error occurs
db.on('error', function() {
  console.log('mongoose connection error');
});
//connect successfully
db.once('open', function() {
  console.log('mongoose connected successfully');
});

//create our schema
var patientSchema = mongoose.Schema({
  number:{type:Number,unique:true},
  doctorName: String,
  firstName:String,
  lastName:String,
  userType:String,
  gender:String,
  age:Number,
  phone:Number,
  conditions:String,
  past_Diseases:String,
  currentlly_Medications:String,
  genetic_Diseases:String,
  allergies:String,
  description: String,
  appointments: [{date:String , from:String ,to:String , patient:String, doctor:String , description:String }]
});

//compiling our schema into a Model(class)
var Patient = mongoose.model('Patient', patientSchema);

var selectAll = function(callback) {
  Patient.find({},function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, Patient);
    }
  });
};

//functionality to our instances:
var save=function(data){

  var user = new User(data)
  user.save()
}

var savePat=function(data){

var pat = new Patient(data)
pat.save()
}

//create our schema
var userSchema = mongoose.Schema({
  userName:{type:String,unique:true},
  password:String,
  firstName:String,
  lastName:String,
  address:String,
  contact:String,
  bday:String,
  gender:String,
  disability:String,
  drugs:String,
  pregnant:String,
  medications:String,
  fullName:String,
  speciality:String,
  userType: String,
});




//compiling our schema into a Model(class)
var User = mongoose.model('User', userSchema);

module.exports=User;
module.exports=Patient;
module.exports.selectAll = selectAll;
module.exports.save = save;
module.exports.savePat = savePat;