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

var SkipBackward = function SkipBackward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,5V19L13,12M6,5V19H4V5M13,5V19L6,12' })
  );
};
SkipBackward = (0, _pure2.default)(SkipBackward);
SkipBackward.displayName = 'SkipBackward';
SkipBackward.muiName = 'SvgIcon';

exports.default = SkipBackward;