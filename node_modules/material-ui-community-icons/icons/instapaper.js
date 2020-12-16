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

var Instapaper = function Instapaper(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10,5A1,1 0 0,0 9,4H8V2H16V4H15A1,1 0 0,0 14,5V19A1,1 0 0,0 15,20H16V22H8V20H9A1,1 0 0,0 10,19V5Z' })
  );
};
Instapaper = (0, _pure2.default)(Instapaper);
Instapaper.displayName = 'Instapaper';
Instapaper.muiName = 'SvgIcon';

exports.default = Instapaper;