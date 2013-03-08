



//  Shorthand Omissions Test Runner
//  -------------------------------


var testRunnerConfig = {
  describe: 'Shorthand Edge Omissions',
  stylus: {
    use: require('./index')(),
    import: 'shorthand-edge-omissions'
  }
}

require('stylus-test-runner')(testRunnerConfig)
