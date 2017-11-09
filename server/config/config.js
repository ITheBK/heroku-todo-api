var env = process.env.NODE_ENV || 'development';
console.log('Env::::::::::',env);

//Mongo from mlab
process.env.MONGODB_URI = 'mongodb://ithebk:brtmlb16&#@ds251845.mlab.com:51845/todo-app';
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
}
else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}
