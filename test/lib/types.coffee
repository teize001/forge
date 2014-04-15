class Foo
  constructor: () ->

class Bar
  constructor: () ->

class DependsOnFoo
  constructor: (@foo) ->

class TypeWithBindingHints
  constructor: (@dep1, @dep2) ->
    "dep1->a"
    "dep2->b"

class DependsOnForge
  constructor: (@forge) ->

class CircularA
  constructor: (@b) ->

class CircularB
  constructor: (@a) ->

module.exports = {
  Foo
  Bar
  DependsOnFoo
  TypeWithBindingHints
  DependsOnForge
  CircularA
  CircularB
}