const express = require('express');
const router = express.Router();

//Item model
const ItemScript = require('../../models/Item');

//
router.get('/', (req,res) => {
	//res.send("Hello world");
	ItemModel.find()
		.sort({ date: -1})
		.then(items => res.json(items));
		console.log("I am inside get method in item.js")
});

router.post('/', (req,res) => {
	console.log("I am inside post method in item.js")
	const newItem = new ItemModel({
		name: req.body.name
	});
	newItem.save().then(item => res.json(item));
});

module.exports = router;

