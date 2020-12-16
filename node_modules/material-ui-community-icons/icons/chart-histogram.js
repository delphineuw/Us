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

var ChartHistogram = function ChartHistogram(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z' })
  );
};
ChartHistogram = (0, _pure2.default)(ChartHistogram);
ChartHistogram.displayName = 'ChartHistogram';
ChartHistogram.muiName = 'SvgIcon';

exports.default = ChartHistogram;