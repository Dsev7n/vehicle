var express = require('express');
var router = express.Router();

var indexRouter = require('../vehicle/dist/index.html');

/* GET home page. */
// router.post('/', function(req, res) {
//   res.header("Access-Control-Allow-Origin", "*");
//   var str = '';
//   req.on('data', function(chunk) {
//     str += chunk;
//   });
//   req.on('end', function() {
//     console.log(str);
//   })
//   res.send('成功回掉');
// });
router.get('/', function(req, res, next) {
  res.render(indexRouter);
});

module.exports = router;
