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

var Numeric9PlusBox = function Numeric9PlusBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M19,11H17V9H15V11H13V13H15V15H17V13H19V11M10,7H8A2,2 0 0,0 6,9V11C6,12.11 6.9,13 8,13H10V15H6V17H10A2,2 0 0,0 12,15V9C12,7.89 11.1,7 10,7M8,9H10V11H8V9Z' })
  );
};
Numeric9PlusBox = (0, _pure2.default)(Numeric9PlusBox);
Numeric9PlusBox.displayName = 'Numeric9PlusBox';
Numeric9PlusBox.muiName = 'SvgIcon';

exports.default = Numeric9PlusBox;