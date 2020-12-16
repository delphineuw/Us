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

var ViewGrid = function ViewGrid(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3' })
  );
};
ViewGrid = (0, _pure2.default)(ViewGrid);
ViewGrid.displayName = 'ViewGrid';
ViewGrid.muiName = 'SvgIcon';

exports.default = ViewGrid;