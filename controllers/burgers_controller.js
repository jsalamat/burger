var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var user = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.


router.get("/burgers", function(req, res) {  
  user.all(function(data){
    res.render('index', {
      burgers : data
    })
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(response){
    res.redirect('/')
  })
});


router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;