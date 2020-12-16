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

var PlaylistMinus = function PlaylistMinus(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2,16H10V14H2M12,14V16H22V14M14,6H2V8H14M14,10H2V12H14V10Z' })
  );
};
PlaylistMinus = (0, _pure2.default)(PlaylistMinus);
PlaylistMinus.displayName = 'PlaylistMinus';
PlaylistMinus.muiName = 'SvgIcon';

exports.default = PlaylistMinus;