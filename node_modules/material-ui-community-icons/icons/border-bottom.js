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

var BorderBottom = function BorderBottom(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M5,15H3V17H5M3,21H21V19H3M5,11H3V13H5M19,9H21V7H19M19,5H21V3H19M5,7H3V9H5M19,17H21V15H19M19,13H21V11H19M17,3H15V5H17M13,3H11V5H13M17,11H15V13H17M13,7H11V9H13M5,3H3V5H5M13,11H11V13H13M9,3H7V5H9M13,15H11V17H13M9,11H7V13H9V11Z' })
  );
};
BorderBottom = (0, _pure2.default)(BorderBottom);
BorderBottom.displayName = 'BorderBottom';
BorderBottom.muiName = 'SvgIcon';

exports.default = BorderBottom;