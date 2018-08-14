var express = require('express');
var router = express.Router();
var mysql = require("mysql");

var connection = mysql.createConnection({
	host     : 'localhost',
  	user     : 'root',
  	password : '123456',
  	port: 3306,
  	database: "books"
})

connection.connect();

// get post put delete 
// restful API设计风格

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // 1.查询数据库，并且返回, query查询
	connection.query('SELECT * from books', function(err, rows, fields) {
		if (err) throw err;
		console.log('The solution is: ', rows);
		var obj = {
			status: 200,
			results: rows
		}
		res.json(obj);
	});

});


/* GET users listing. */
router.post('/', function(req, res, next) {
	// console.log(req.body);
	var name = req.body.name;
	var author = req.body.author;
	var price = req.body.price;
	var press = req.body.press;
  // res.send('respond with a resource');
  // 1.查询数据库，并且返回, query查询
    var queryString = `insert into books (bookName, bookPrice, bookAuthor, bookPress) values(${name}, ${price}, ${author}, ${press})`;
    // console.log(queryString);
	connection.query(queryString, function(err, rows, fields) {
		if(err) {
			throw err;
		}else {
			res.json({
				status: 200,
				results: "插入成功"
			})
		}
	});
});

router.delete('/:id', function(req, res, next) {
	// 
	var id = req.params.id;
	// delete from books where id=id
	var queryString = `delete from books where id=${id}`;
	connection.query(queryString, function(err, rows) {
		if(err) {
			throw err
		}else {
			res.json({
				status: 200,
				results: "删除成功"
			})
		}
	})
});

router.put('/:id', function(req, res, next) {
	// 
	var id = req.params.id;
	var name = req.body.name;
	var author = req.body.author;
	var price = req.body.price;
	var press = req.body.press;
	// delete from books where id=id
	var queryString = `update books set bookName='${name}',bookPrice=${price},bookAuthor='${author}',bookPress='${press}' where id=${id}`;
	// console.log(queryString);
	connection.query(queryString, function(err, rows) {
		if(err) {
			throw err
		}else {
			res.json({
				status: 200,
				results: "更新成功"
			})
		}
	})
});

module.exports = router;
