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

var UmbrellaOutline = function UmbrellaOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,4C15.09,4 17.82,6.04 18.7,9H5.3C6.18,6.03 8.9,4 12,4M12,2A9,9 0 0,0 3,11H11V19A1,1 0 0,1 10,20A1,1 0 0,1 9,19H7A3,3 0 0,0 10,22A3,3 0 0,0 13,19V11H21A9,9 0 0,0 12,2Z' })
  );
};
UmbrellaOutline = (0, _pure2.default)(UmbrellaOutline);
UmbrellaOutline.displayName = 'UmbrellaOutline';
UmbrellaOutline.muiName = 'SvgIcon';

exports.default = UmbrellaOutline;