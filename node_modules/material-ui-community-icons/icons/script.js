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

var Script = function Script(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14,20A2,2 0 0,0 16,18V5H9A1,1 0 0,0 8,6V16H5V5A3,3 0 0,1 8,2H19A3,3 0 0,1 22,5V6H18V18L18,19A3,3 0 0,1 15,22H5A3,3 0 0,1 2,19V18H12A2,2 0 0,0 14,20Z' })
  );
};
Script = (0, _pure2.default)(Script);
Script.displayName = 'Script';
Script.muiName = 'SvgIcon';

exports.default = Script;