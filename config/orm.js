//Import (require) connection.js into orm.js
var connection = require('../config/connection.js')

//Create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

var orm = 
{

	//selectAll()

	findById: function(idAgent, callback)
	{
		//mySQL Query
		console.log("findById: " + idAgent);
		connection.query('SELECT * FROM credits where ? ', [{id_agent: idAgent}],
		
			function(err, result)
				{
					if (err) throw err;
					callback(result);
					//console.log(result);
				});
	},

	//insertOne()
	/*insertOne: function(burger_name, callback)
	{
		connection.query('INSERT INTO visits SET ?', 
			{	burger_name: burger_name,
				devoured: false,
			}, function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
				
	},

	//updateOne()
	updateOne: function(burgerID, callback)
	{
		connection.query('UPDATE visits SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
				if (err) throw err;
				callback(result);
			});
	}*/
};


// Export the ORM object in module.exports.
module.exports = orm;