// Generated by CoffeeScript 1.10.0
(function() {
  var InstanceResolver, Resolver, _, assert,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  assert = require('assert');

  _ = require('underscore');

  Resolver = require('./Resolver');

  InstanceResolver = (function(superClass) {
    extend(InstanceResolver, superClass);

    function InstanceResolver(forge, binding, instance) {
      this.instance = instance;
      InstanceResolver.__super__.constructor.call(this, forge, binding);
      assert(this.instance != null, 'The argument "instance" must have a value');
      this.dependencies = [];
    }

    InstanceResolver.prototype.resolve = function(context, args) {
      return this.instance;
    };

    InstanceResolver.prototype.toString = function() {
      var ref;
      if (this.instance == null) {
        return '<unknown instance>';
      } else if (((ref = this.instance.constructor) != null ? ref.name : void 0) != null) {
        return "an instance of " + this.instance.constructor.name;
      } else {
        return "an instance of " + (typeof this.instance);
      }
    };

    return InstanceResolver;

  })(Resolver);

  module.exports = InstanceResolver;

}).call(this);
