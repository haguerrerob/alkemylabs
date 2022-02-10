"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var server = (0, _express["default"])(); // Middlewares...

server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use((0, _morgan["default"])('dev'));
server.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from

  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use("/", _index["default"]);
server.use(function (err, req, res, next) {
  var status = err.status || 500;
  var message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
var _default = server;
exports["default"] = _default;