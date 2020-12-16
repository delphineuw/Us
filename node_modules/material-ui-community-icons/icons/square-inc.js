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

var SquareInc = function SquareInc(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6,3H18A3,3 0 0,1 21,6V18A3,3 0 0,1 18,21H6A3,3 0 0,1 3,18V6A3,3 0 0,1 6,3M7,6A1,1 0 0,0 6,7V17A1,1 0 0,0 7,18H17A1,1 0 0,0 18,17V7A1,1 0 0,0 17,6H7M9.5,9H14.5A0.5,0.5 0 0,1 15,9.5V14.5A0.5,0.5 0 0,1 14.5,15H9.5A0.5,0.5 0 0,1 9,14.5V9.5A0.5,0.5 0 0,1 9.5,9Z' })
  );
};
SquareInc = (0, _pure2.default)(SquareInc);
SquareInc.displayName = 'SquareInc';
SquareInc.muiName = 'SvgIcon';

exports.default = SquareInc;