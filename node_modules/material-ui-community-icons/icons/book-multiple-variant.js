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

var BookMultipleVariant = function BookMultipleVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M10,9L12,7.5L14,9V4H10V9M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z' })
  );
};
BookMultipleVariant = (0, _pure2.default)(BookMultipleVariant);
BookMultipleVariant.displayName = 'BookMultipleVariant';
BookMultipleVariant.muiName = 'SvgIcon';

exports.default = BookMultipleVariant;