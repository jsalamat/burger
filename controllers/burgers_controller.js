var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.


router.get("/", function(req, res) {  
  burger.all(function(burgerdata){
    console.log(burgerdata);
    res.render('index', {burgerdata});
  });
});

router.post("/create", function(req, res) {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(response){
    res.redirect('/')
  })
});


router.put("/burgers/update", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;