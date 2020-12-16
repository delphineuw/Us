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

var Umbraco = function Umbraco(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8.6,8.6L7.17,8.38C6.5,11.67 6.46,14.24 7.61,15.5C8.6,16.61 11.89,16.61 11.89,16.61C11.89,16.61 15.29,16.61 16.28,15.5C17.43,14.24 17.38,11.67 16.72,8.38L15.29,8.6C15.29,8.6 16.54,13.88 14.69,14.69C13.81,15.07 11.89,15.07 11.89,15.07C11.89,15.07 10.08,15.07 9.2,14.69C7.35,13.88 8.6,8.6 8.6,8.6M12,3A9,9 0 0,1 21,12A9,9 0 0,1 12,21A9,9 0 0,1 3,12A9,9 0 0,1 12,3Z' })
  );
};
Umbraco = (0, _pure2.default)(Umbraco);
Umbraco.displayName = 'Umbraco';
Umbraco.muiName = 'SvgIcon';

exports.default = Umbraco;