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

var TriangleOutline = function TriangleOutline(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,2L1,21H23M12,6L19.53,19H4.47' })
  );
};
TriangleOutline = (0, _pure2.default)(TriangleOutline);
TriangleOutline.displayName = 'TriangleOutline';
TriangleOutline.muiName = 'SvgIcon';

exports.default = TriangleOutline;