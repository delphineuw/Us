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

var TooltipEdit = function TooltipEdit(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M18,14V12H12.5L10.5,14H18M6,14H8.5L15.35,7.12C15.55,6.93 15.55,6.61 15.35,6.41L13.59,4.65C13.39,4.45 13.07,4.45 12.88,4.65L6,11.53V14Z' })
  );
};
TooltipEdit = (0, _pure2.default)(TooltipEdit);
TooltipEdit.displayName = 'TooltipEdit';
TooltipEdit.muiName = 'SvgIcon';

exports.default = TooltipEdit;