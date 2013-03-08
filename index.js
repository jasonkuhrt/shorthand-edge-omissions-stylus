


module.exports = pluginFactory;



function pluginFactory(){
  return function plugin(stylus) {
    stylus.use(require('clockhand-stylus')());
    stylus.include(__dirname);
  };
}
