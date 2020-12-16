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

var Television = function Television(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,17H4V5H20M20,3H4C2.89,3 2,3.89 2,5V17A2,2 0 0,0 4,19H8V21H16V19H20A2,2 0 0,0 22,17V5C22,3.89 21.1,3 20,3Z' })
  );
};
Television = (0, _pure2.default)(Television);
Television.displayName = 'Television';
Television.muiName = 'SvgIcon';

exports.default = Television;