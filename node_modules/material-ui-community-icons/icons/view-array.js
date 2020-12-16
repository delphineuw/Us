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

var ViewArray = function ViewArray(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,18H17V5H8M18,5V18H21V5M4,18H7V5H4V18Z' })
  );
};
ViewArray = (0, _pure2.default)(ViewArray);
ViewArray.displayName = 'ViewArray';
ViewArray.muiName = 'SvgIcon';

exports.default = ViewArray;