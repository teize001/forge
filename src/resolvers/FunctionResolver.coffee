assert   = require 'assert'
_        = require 'underscore'
Resolver = require './Resolver'

class FunctionResolver extends Resolver

  constructor: (forge, binding, @func) ->
    super(forge, binding)
    assert @func?, 'The argument "func" must have a value'
    @dependencies = @forge.inspector.getNamedDependencies(@func)

  resolve: ->
    args = @resolveDependencies(@dependencies)
    @func.apply(null, args)

  toString: ->
    'function'

module.exports = FunctionResolver
