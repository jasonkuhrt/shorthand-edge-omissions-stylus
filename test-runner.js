



//  Shorthand Omissions Test Runner
//  -------------------------------


var testRunnerConfig = {
  stylus: {
    use: require('./index')(),
    import: 'shorthand-edge-omissions'
  }
}

require('stylus-test-runner')(testRunnerConfig)
