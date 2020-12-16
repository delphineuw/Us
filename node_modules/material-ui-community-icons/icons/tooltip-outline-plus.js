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

var TooltipOutlinePlus = function TooltipOutlinePlus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M11,6H13V9H16V11H13V14H11V11H8V9H11V6Z' })
  );
};
TooltipOutlinePlus = (0, _pure2.default)(TooltipOutlinePlus);
TooltipOutlinePlus.displayName = 'TooltipOutlinePlus';
TooltipOutlinePlus.muiName = 'SvgIcon';

exports.default = TooltipOutlinePlus;