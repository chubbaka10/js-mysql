var mysql = require('mysql');
var connection = mysql.createConnection({
	//properties..
	host: 'localhost',
	user: 'root',
	password: '',
	database: "myfirstdb"
})


connection.query('SELECT * from  vizitka', function(error,rows,fields){
	if (!error) {
		console.log('rows');
	} else {
		console.log('err');
	}
});
connection.end();
