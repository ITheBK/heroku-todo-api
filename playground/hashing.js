  const {SHA256} = require('crypto-js');
  const jwt = require('jsonwebtoken');

  var data = {
    id: 10,
    
  };
  var token = jwt.sign(data,'mysecret'); //send back to user
  console.log(token);

  var decoded = jwt.verify(token,'mysecret');

  console.log(`decoded`,decoded);

  // var message = "Hello World";
  //
  // var hash = SHA256(message).toString();
  //
  // console.log(`message:${message}`);
  // console.log(`hash:${hash}`);
  //
  // var data = {
  //   id:4
  // };
  //
  // var token = {
  //   data,
  //   hash: SHA256(JSON.stringify(data)+"secrete").toString()
  // };
  //
  // //Middle attack
  // // token.data.id = 5
  // // token.hash = SHA256(JSON.stringify(token.data)).toString();
  // //
  // // var resultHash = SHA256(JSON.stringify(data)+"secrete").toString();
  //
  // if(resultHash === token.hash) {
  //   console.log('Data was not changed');
  // }
  // else {
  //     console.log('Data changed!! Don\'t trust ');
  // }
