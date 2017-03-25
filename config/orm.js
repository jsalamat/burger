// Import MySQL connection.
// var connection = require("../config/connection.js");
var connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

    update: function(tableInput, condition, cb) {
    connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(tableInput, val, cb) {
    connection.query('INSERT INTO ' +tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};
  // An example of objColVals would be {name: panther, sleepy: true}


// Export the orm object for the model (burger.js).
module.exports = orm;