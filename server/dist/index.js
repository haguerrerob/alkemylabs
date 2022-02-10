"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var PORT = process.env.PORT || 4000;

_app["default"].listen(PORT, function () {
  console.log("Listening on port ".concat(PORT));
});