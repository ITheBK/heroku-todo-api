var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongourl = process.env.PORT?'mongodb://ithebk:brtmlb16&#@ds251845.mlab.com:51845/todo-app':'mongodb://localhost:27017/TodoApp'
mongoose.connect(mongourl,{useMongoClient: true});

module.exports = {mongoose};
