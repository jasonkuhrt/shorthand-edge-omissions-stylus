


//  Shorthand Omissions Test Runner
//  -------------------------------



var fs                 = require('fs')
var cleanCSS           = require('clean-css')
var stylus             = require('stylus')
var shorthandOmissions = require('./index')

// Constants

var testDirPath = 'test'

// test cases

var cases = fs.readdirSync(testDirPath).filter(function(file){
  return ~file.indexOf('.styl');
}).map(function(file){
  return file.replace('.styl', '');
})



describe('integration', function(){
  cases.forEach(function(test){
    var testName     = test.replace(/[-.]/g, ' ')
    var testFilePath = testDirPath + '/' + test + '.styl'
    var stylusSource = fs.readFileSync(testFilePath, 'utf8').replace(/\r/g, '')
    var styl         = stylus(stylusSource).use(shorthandOmissions).import('better-clockhand').set('compress', true)

    it(testName, function(){
      styl.render(function(err, actual){
        if (err) throw err
        actual       = cleanCSS.process(actual)
        var expected = cleanCSS.process(fs.readFileSync(testDirPath + '/' + test + '.css', 'utf8').replace(/\r/g, '').trim())
        actual.should.equal(expected);
      });
    })

  });
})
