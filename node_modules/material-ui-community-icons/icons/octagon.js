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

var Octagon = function Octagon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27' })
  );
};
Octagon = (0, _pure2.default)(Octagon);
Octagon.displayName = 'Octagon';
Octagon.muiName = 'SvgIcon';

exports.default = Octagon;