
/**
 * Module dependencies.
 */

var stylus = require('stylus')
  , a   = require('./index')
  , fs = require('fs')
  , cleanCSS = require('clean-css');


// test cases

var cases = fs.readdirSync('tests').filter(function(file){
  return ~file.indexOf('.styl');
}).map(function(file){
  return file.replace('.styl', '');
});

describe('integration', function(){
  cases.forEach(function(test){
    var name = test.replace(/[-.]/g, ' ');
    it(name, function(){
      var path = 'tests/' + test + '.styl';
      var styl = fs.readFileSync(path, 'utf8').replace(/\r/g, '');
      var css = fs.readFileSync('tests/' + test + '.css', 'utf8').replace(/\r/g, '').trim();
      var style = stylus(styl).use(a).set('compress', true);

      style.render(function(err, actual){
        if (err) throw err;
        cleanCSS.process(actual).should.equal(cleanCSS.process(css));
      });
    })
  });
})
