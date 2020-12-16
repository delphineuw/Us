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

var FormatTextdirectionRToL = function FormatTextdirectionRToL(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10A4,4 0 0,0 6,6A4,4 0 0,0 10,10Z' })
  );
};
FormatTextdirectionRToL = (0, _pure2.default)(FormatTextdirectionRToL);
FormatTextdirectionRToL.displayName = 'FormatTextdirectionRToL';
FormatTextdirectionRToL.muiName = 'SvgIcon';

exports.default = FormatTextdirectionRToL;