


//  Shorthand Omissions Test Runner
//  -------------------------------



var fs                 = require('fs')
var cleanCSS           = require('clean-css')
var stylus             = require('stylus')
var shorthandOmissions = require('./index')
var glob               = require('glob')

// Constants

var testDirPath = 'test'

//var testFiles = fs.readdirSync(testDirPath)



// test cases

var testFiles = glob.sync(testDirPath + '/**/*.styl')

var suites = testFiles.map(getTestsFromFile)
// empty files reutnr false, prune any such returned vals now
.filter(function(val){ return val })




describe('Shorthand Omissions', function(){
  suites.forEach(function(tests){
    tests.forEach(function(test){
      var styl = stylus(test.stylus).use(shorthandOmissions).import('shorthand-omissions').set('compress', true)
      it(test.description, function(){
        styl.render(function(err, actual){
          if (err) throw err
          actual       = cleanCSS.process(actual)
          var expected = cleanCSS.process(test.css)
          actual.should.equal(expected);
        })
      })
    })
  })
})




function getTestsFromFile(filePath){
  var fileContents = fs.readFileSync(filePath, 'utf8')
  if (fileContents === "") return false;
  var testsRaw     = fileContents.split(/.*@it.*\n/).map(trim).filter(isntEmpty)
  var descriptions = fileContents.match(/@it.*\n/g)
  var tests        = testsRaw.map(extractTestParts)
  descriptions.forEach(function(desc, i){
    tests[i].description = desc.replace('@it','').trim()
    })
  return tests
}

function extractTestParts(testRaw) {
  var test = testRaw.split(/.*@expect.*\n?/).map(removeComments).map(trim);
  return { stylus: test[0], css: test[1] }
}
function removeComments(string){ return string.replace(/\/\/.*\n?/g,'') }
function trim(string)     { return string.trim() }
function isntEmpty(string){ return string.length }
