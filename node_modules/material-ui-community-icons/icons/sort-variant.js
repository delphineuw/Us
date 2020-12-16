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

var SortVariant = function SortVariant(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z' })
  );
};
SortVariant = (0, _pure2.default)(SortVariant);
SortVariant.displayName = 'SortVariant';
SortVariant.muiName = 'SvgIcon';

exports.default = SortVariant;