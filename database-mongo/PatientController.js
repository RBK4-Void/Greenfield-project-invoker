var Patient= require('./index');
var mongoose=require('mongoose');

//controller methods:
//1.create one patient
exports.createOne = function (req, res) {
  //try to solve problem not unique jozqq cant :(
  //console.log(req.body);
  req.body.number=JSON.parse(req.body.number);
  //console.log('HERE',req.body);
  var pInfo=req.body
  var patient=new Patient(pInfo)
  console.log(patient)
  patient.save(function(err,patient){
    if(err){
      console.log(err);
      res.send('This number is already taken, choose another one');
    }else{
      res.send('Success sent this data and create new patient ')
    }
  })
};





//2.update specific info for one patient
exports.updateOne = function (req, res) {
  Patient.find({number:req.body.number},function(err,patient){
    if(err){
      console.log(err)
      res.send(500);
    }
    else{
      patient.number=req.body.number;
      patient.firstName=req.body.firstName;
      patient.lastName=req.body.lastName;
      patient.gender=req.body.gender;
      patient.age=req.body.age;
      patient.phone=req.body.phone;
      patient.conditions=req.body.conditions;
      patient.past_Diseases=req.body.past_Diseases;
      patient.currentlly_Medications=req.body.currentlly_Medications;
      patient.genetic_Diseases=req.body.genetic_Diseases;
      patient.allergies=req.body.allergies;
      patient.description=req.body.description;

      patient.save(function(err,patient){
        if(err){
          console.log(err);
          res.send(err)
        }else{
          console.log('Success updated patient ^_^!');
          res.send('Success updated patient ^_^!');
        }
      })
    }
  })
};

//3.delete one patient
exports.delete=function(req,res){
  Patient.find({number:req.body.number},function(err,patient){
    if(err){
      console.log(err)
      res.send(500);
             }
             else{
              patient.remove(function(err,patient){
                if(err){
                  console.log(err);
                  res.send(err);
                }
                else{
                  console.log('Success  deleted patient ^.^');
                  res.send('Success  deleted patient ^.^');
                }
              })
             }
  })
};

//4.return all info for one patient
exports.retrieveOne=function(req,res){
  //try to solve problem cant go to correct number jozaa
  //take the number sent in the GET request
  //console.log(req)
  console.log('HEREEEEEEEEEEEE:',req);
  var firstName=req._parsedOriginalUrl.path.split('=')[1]
  console.log('HEREEEEEEEEEEEE:',firstName);
  
  //req.body.number=JSON.parse(req.body.number);
  //console.log('HERE',req.body);
  //console.log(req)
  Patient.find({firstName:firstName},function(err,patient){
    if(err){
      console.log(err)
      res.send(500)
    }
    else{
      console.log(patient)
      res.send(patient)
    }
  })
};

/*
//4.return all info for one patient
exports.retrieveOne=function(req,res){
  //try to solve problem cant go to correct number jozaa
  //take the number sent in the GET request
  console.log(req)
  console.log('HEREEEEEEEEEEEE:',req._parsedOriginalUrl.path.split('=')[1]);
  var number=req._parsedOriginalUrl.path.split('=')[1]
  //req.body.number=JSON.parse(req.body.number);
  //console.log('HERE',req.body);
  //console.log(req)
  Patient.find({number:number},function(err,patient){
    if(err){
      console.log(err)
      res.send(500)
    }
    else{
      console.log(patient)
      res.send(patient)
    }
  })
};

*/
//5.return all info for all patients
exports.retrieveAll=function(req,res){
  Patient.find(function(err,allpatient){
    if(err){
      console.log(err)
      res.send(500);
    }
    else{
      console.log(allpatient);
      res.send(allpatient)
    }
  })
};