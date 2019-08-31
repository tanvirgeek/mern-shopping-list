const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	date:{
		type: Date,
		default: Date.now
	}
});

//The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. ** Thus, for the example above, the model Tank is for the tanks collection in the database.
module.exports = ItemModel = mongoose.model('item', ItemSchema);