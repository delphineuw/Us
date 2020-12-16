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

var ViewCarousel = function ViewCarousel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M18,6V17H22V6M2,17H6V6H2M7,19H17V4H7V19Z' })
  );
};
ViewCarousel = (0, _pure2.default)(ViewCarousel);
ViewCarousel.displayName = 'ViewCarousel';
ViewCarousel.muiName = 'SvgIcon';

exports.default = ViewCarousel;