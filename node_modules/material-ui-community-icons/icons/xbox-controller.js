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

var XboxController = function XboxController(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8.75,15.75C6.75,15.75 6,18 4,19C2,19 0.5,16 4.5,7.5H4.75L5.19,6.67C5.19,6.67 8,5 9.33,6.23H14.67C16,5 18.81,6.67 18.81,6.67L19.25,7.5H19.5C23.5,16 22,19 20,19C18,18 17.25,15.75 15.25,15.75H8.75M12,7A1,1 0 0,0 11,8A1,1 0 0,0 12,9A1,1 0 0,0 13,8A1,1 0 0,0 12,7Z' })
  );
};
XboxController = (0, _pure2.default)(XboxController);
XboxController.displayName = 'XboxController';
XboxController.muiName = 'SvgIcon';

exports.default = XboxController;