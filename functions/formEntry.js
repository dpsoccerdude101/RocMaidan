exports.handler = function(event, context, callback) {
  console.log("Yeah this ran");
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
