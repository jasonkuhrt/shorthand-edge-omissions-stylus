



//  Shorthand Omissions Test Runner
//  -------------------------------


var testRunnerConfig = {
  testDirPath : './test',
  describe    : 'Shorthand Edge Omissions',
  use         : require('./index'),
  import      : 'shorthand-edge-omissions'
}


require('./stylus-test-runner')(testRunnerConfig)
