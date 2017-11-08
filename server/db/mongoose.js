var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ithebk:brtmlb16&#@ds251845.mlab.com:51845/todo-app',{useMongoClient: true});

module.exports = {mongoose};
