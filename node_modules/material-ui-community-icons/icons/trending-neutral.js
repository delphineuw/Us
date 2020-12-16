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

var TrendingNeutral = function TrendingNeutral(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M22,12L18,8V11H3V13H18V16L22,12Z' })
  );
};
TrendingNeutral = (0, _pure2.default)(TrendingNeutral);
TrendingNeutral.displayName = 'TrendingNeutral';
TrendingNeutral.muiName = 'SvgIcon';

exports.default = TrendingNeutral;