"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArrayIndex = getArrayIndex;
exports.getUserIdFromWindowLocation = getUserIdFromWindowLocation;
exports.loginUser = loginUser;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getArrayIndex(array) {
  return array.length - 1;
}

function getUserIdFromWindowLocation(url) {
  var userLocationDataArray = url.split('/');
  var arrayIndex = getArrayIndex(userLocationDataArray);
  var userId = userLocationDataArray[arrayIndex];
  return userId;
}

function loginUser(data) {
  var res;
  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post('api/users/login', data));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}