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

var SkipForward = function SkipForward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,5V19L11,12M18,5V19H20V5M11,5V19L18,12' })
  );
};
SkipForward = (0, _pure2.default)(SkipForward);
SkipForward.displayName = 'SkipForward';
SkipForward.muiName = 'SvgIcon';

exports.default = SkipForward;