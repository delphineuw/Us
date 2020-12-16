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

var FridgeFilledTop = function FridgeFilledTop(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7,2A2,2 0 0,0 5,4V19A2,2 0 0,0 7,21V22H9V21H15V22H17V21A2,2 0 0,0 19,19V4A2,2 0 0,0 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z' })
  );
};
FridgeFilledTop = (0, _pure2.default)(FridgeFilledTop);
FridgeFilledTop.displayName = 'FridgeFilledTop';
FridgeFilledTop.muiName = 'SvgIcon';

exports.default = FridgeFilledTop;