// Generated by CoffeeScript 1.7.1
(function() {
  var BindingError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BindingError = (function(_super) {
    __extends(BindingError, _super);

    function BindingError(name, message) {
      this.message = "Could not declare binding for component named " + name + ": " + message;
      Error.captureStackTrace(this, arguments.callee);
    }

    return BindingError;

  })(Error);

  module.exports = BindingError;

}).call(this);
