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

var ViewHeadline = function ViewHeadline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,5V7H21V5M4,11H21V9H4M4,19H21V17H4M4,15H21V13H4V15Z' })
  );
};
ViewHeadline = (0, _pure2.default)(ViewHeadline);
ViewHeadline.displayName = 'ViewHeadline';
ViewHeadline.muiName = 'SvgIcon';

exports.default = ViewHeadline;