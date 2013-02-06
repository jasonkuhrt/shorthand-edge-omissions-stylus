



//  Shorthand Omissions Test Runner
//  -------------------------------



var fs                     = require('fs')
var cleanCSS               = require('clean-css')
var stylus                 = require('stylus')
var shorthandEdgeOmissions = require('./index')
var glob                   = require('glob')
var _ = require('lodash')



var config = {
  testDirPath       : './test',
  stylusPackageName : 'shorthand-edge-omissions'
}





describe('Shorthand Edge Omissions', function(){
  forEachTest(function(test){

    stylus(test.styl, {compress: true})
    .use(shorthandEdgeOmissions)
    .import(config.stylusPackageName)
    .render(function(err, cssFromStylus){
      if (err) throw err

      it(test.description, function(){
        cleanCSS.process(cssFromStylus)
        .should.equal(test.css);
      })

    })

  })
})



function forEachTest(callback) {
  var testFiles = _.reject(glob.sync(config.testDirPath + '/**/*.styl'), isEmptyFile)
  _.each(_.flatten(_.map(testFiles, getTestsFromFile)), callback)
}


function getTestsFromFile(filePath) {
  var fileContents = trimNewlines(fs.readFileSync(filePath, 'utf8'))
  return extractTestsFromString(fileContents)
}



function extractTestsFromString(string) {
  //  Filter empty strings out, it seems that the
  //  @it line leaves an empty string entry behind in the array
  return _.map(_.reject(string.split(/.*@it\s?/), isEmpty), extractTestFromString)
}



function extractTestFromString(test) {
  var description = test.match(/.*/)[0]
  test = test.replace(/.*/,'')
  stylusAndCss = test.split(/.*@expect.*/).map(trimNewlines)

  return {
    description : description,
    styl        : stylusAndCss[0],
    css         : cleanCSS.process(stylusAndCss[1])
  }
}



//  string utils

function isEmpty(string) {
  return !string.length
}

function isEmptyFile(filePath) {
  return isEmpty(trimNewlines(fs.readFileSync(filePath, 'utf8')))
}

//  whitespace mutation utils

function trim(string)         { return string.trim() }
function trimNewlines(string) { return string.replace(/^(\s*|\n*)|(\s*|\n*)$/g,'') }
