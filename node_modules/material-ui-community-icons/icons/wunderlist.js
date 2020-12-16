'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wunderlist = function Wunderlist(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M17,17.5L12,15L7,17.5V5H5V19H19V5H17V17.5M12,12.42L14.25,13.77L13.65,11.22L15.64,9.5L13,9.27L12,6.86L11,9.27L8.36,9.5L10.35,11.22L9.75,13.77L12,12.42M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' })
  );
};
Wunderlist = (0, _pure2.default)(Wunderlist);
Wunderlist.displayName = 'Wunderlist';
Wunderlist.muiName = 'SvgIcon';

exports.default = Wunderlist;