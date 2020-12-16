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

var ViewColumn = function ViewColumn(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M16,5V18H21V5M4,18H9V5H4M10,18H15V5H10V18Z' })
  );
};
ViewColumn = (0, _pure2.default)(ViewColumn);
ViewColumn.displayName = 'ViewColumn';
ViewColumn.muiName = 'SvgIcon';

exports.default = ViewColumn;