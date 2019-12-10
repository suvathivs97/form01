const express = require('express');
const businessRoutes = express.Router();

// Require Business model in our routes module
let Business = require('./business.model');

// Defined store route
businessRoutes.route('/add').post(function (req, res) {
    console.log('jghvfhg',req.body)
let obj = req.body.obj
  let business = Business.create({
    Name:obj.name,
    Age:obj.age,
    PhoneNumber:obj.mobile_no,
    Gender:obj.gender,
    Address:obj.address}
    
    
    )
    .then(business => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    ;
  
    
});

// Defined get data(index or listing) route
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
businessRoutes.route('Edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
businessRoutes.route('/update/:id').put(function (req, res) {
    Business.findById(req.params.id, function(err, business) {

      console.log(req.params.id,'params id')
    if (!business)
      res.status(404).send("data is not found");
    else {
      const obj=req.body.obj
        business.Name = obj.name;
        business.Age = obj.age;
        business.Gender = obj.gender;
        business.PhoneNumber= obj.mobile_no;
        business.Address = obj.address;

          // console.log(business,'business')
        // console.log(obj,'obj')
        business.save().then(business => {
          res.json('Update complete');
      })
      
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').delete(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;
