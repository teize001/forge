// Generated by CoffeeScript 1.10.0
(function() {
  var Lifecycle, TransientLifecycle, assert,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  assert = require('assert');

  Lifecycle = require('./Lifecycle');

  TransientLifecycle = (function(superClass) {
    extend(TransientLifecycle, superClass);

    function TransientLifecycle() {
      return TransientLifecycle.__super__.constructor.apply(this, arguments);
    }

    TransientLifecycle.prototype.resolve = function(resolver, context, args) {
      assert(resolver != null, 'The argument "resolver" must have a value');
      assert(context != null, 'The argument "context" must have a value');
      return resolver.resolve(context, args);
    };

    TransientLifecycle.prototype.toString = function() {
      return 'transient';
    };

    return TransientLifecycle;

  })(Lifecycle);

  module.exports = TransientLifecycle;

}).call(this);
