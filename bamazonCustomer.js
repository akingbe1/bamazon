//dependency for MySql
var mysql = require("mysql");
//dependency for prompting questions in node
var inquirer = require("inquirer");

//connect to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "test",
  // Your password
  password: "password1",
  database: "BamazonDB"
});

//connection status
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

//print each item in the table with the id, product name, department name, price, and quantity in stock
connection.query("SELECT * FROM products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].product_name + " | " 
    	+ res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
  }
  console.log("-----------------------------------");
  buy();
});

//function to buy items from Bamazon
var buy = function() {
  inquirer.prompt([
  {
    name: "productID",
    type: "input",
    message: "What is the ID of the product you would like to buy?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  },
  {
  	name: "units",
    type: "input",
    message: "How many would you like to buy?",
      validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }

  }]).then(function(answer) {
    // checks the database
    	var ItemID = parseInt(answer.units);
    		connection.query("SELECT * FROM products WHERE ?", [{id: answer.productID}], function(err, data) {
  				//check stock quantity
  				if (err) throw err;
  				if (data[0].stock_quantity < ItemID) {
  					console.log("Insufficent Quantity!");
  					buy();
  				} else {
  					//if quantity is sufficent for the order, give total and update stock
  					var updateUnits = data[0].stock_quantity - ItemID;
  					var totalCost = data[0].price * ItemID;
  					connection.query('UPDATE products SET stock_quantity = ? WHERE id = ?', [updateUnits, answer.productID], function(err, results) {
  					if (err) {
  						throw err;
  					} else {
  						console.log("Thank you for your purchase!");
  						console.log("Your total is $" + totalCost);

  					
  					}
  				});
  			}
  		});
	});
};
