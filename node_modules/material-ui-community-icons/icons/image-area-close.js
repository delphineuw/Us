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

var ImageAreaClose = function ImageAreaClose(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12,23L8,19H16L12,23M20,3A2,2 0 0,1 22,5V15A2,2 0 0,1 20,17H4A2,2 0 0,1 2,15V5A2,2 0 0,1 4,3H20M5,14H19L14.5,8L11,12.5L8.5,9.5L5,14Z' })
  );
};
ImageAreaClose = (0, _pure2.default)(ImageAreaClose);
ImageAreaClose.displayName = 'ImageAreaClose';
ImageAreaClose.muiName = 'SvgIcon';

exports.default = ImageAreaClose;