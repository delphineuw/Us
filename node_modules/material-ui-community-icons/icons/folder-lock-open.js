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

var FolderLockOpen = function FolderLockOpen(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18L16,13H14V11A1,1 0 0,1 15,10A1,1 0 0,1 16,11H18A3,3 0 0,0 15,8A3,3 0 0,0 12,11V13H11V17H19Z' })
  );
};
FolderLockOpen = (0, _pure2.default)(FolderLockOpen);
FolderLockOpen.displayName = 'FolderLockOpen';
FolderLockOpen.muiName = 'SvgIcon';

exports.default = FolderLockOpen;