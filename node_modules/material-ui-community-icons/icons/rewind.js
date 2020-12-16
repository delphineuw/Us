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

var Rewind = function Rewind(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z' })
  );
};
Rewind = (0, _pure2.default)(Rewind);
Rewind.displayName = 'Rewind';
Rewind.muiName = 'SvgIcon';

exports.default = Rewind;