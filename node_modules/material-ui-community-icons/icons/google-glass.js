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

var GoogleGlass = function GoogleGlass(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M13,11V13.5H18.87C18.26,17 15.5,19.5 12,19.5A7.5,7.5 0 0,1 4.5,12A7.5,7.5 0 0,1 12,4.5C14.09,4.5 15.9,5.39 17.16,6.84L18.93,5.06C17.24,3.18 14.83,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C17.5,22 21.5,17.5 21.5,12V11H13Z' })
  );
};
GoogleGlass = (0, _pure2.default)(GoogleGlass);
GoogleGlass.displayName = 'GoogleGlass';
GoogleGlass.muiName = 'SvgIcon';

exports.default = GoogleGlass;