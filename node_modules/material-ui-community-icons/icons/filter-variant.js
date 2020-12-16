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

var FilterVariant = function FilterVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z' })
  );
};
FilterVariant = (0, _pure2.default)(FilterVariant);
FilterVariant.displayName = 'FilterVariant';
FilterVariant.muiName = 'SvgIcon';

exports.default = FilterVariant;