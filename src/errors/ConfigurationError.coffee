class ConfigurationError extends Error

  constructor: (name, message) ->
    @message = "The binding for component named #{name} is misconfigured: #{message}"
    Error.captureStackTrace(this, arguments.callee)

module.exports = ConfigurationError
