# shorthand-edge-omissions-stylus [![Build Status](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus.png)](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus)

Permit [clockhand-stylus](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand) in `padding`/`margin`.

### Preview
```
.foo
  padding 1 _
  margin  _ 1 2 _ !important

.foo {
  padding-top   : 1;
  padding-bottom: 1;
  
  margin-right  : 1 !important;
  margin-bottom : 1 !important;
}
```
### Summary
- [Stylus](https://github.com/learnboost/stylus) [mixin](https://github.com/LearnBoost/stylus/blob/master/docs/mixins.md) (not [function](https://github.com/LearnBoost/stylus/blob/master/docs/functions.md))
- `_` in `padding`/`margin` shorthand
- Opinion:
  - Writing `margin`/`padding` assignment becomes brisker since you can use shorthand 100% of the time
  - Edges are represented with "graphics" not words: `margin: 4 3 _ _;   vs   margin-top:3; margin-right:3;`
  - Collecting all `padding` or `margin` edges on one line eases maintainence and visual scanning
  - At scale, writing `margin: 4px 0 0 17px;` when you don't actually want zeros destablizes your css codebase with rule overriding possibilities

.  
.  
.  
### Install
```
npm install shorthand-edge-omissions-stylus --save

stylus.use(require('shorthand-edge-omissions-stylus')())
stylus.import('shorthand-edge-omissions')  // global import, optional
$ stylus ... --import ./node_modules/better-clockhand-stylus   // global import alt, optional
```

### Documentation

Omissions allow you to skip values, whereas CSS forces you to assign something.

```
CSS     .foo { margin : 4px 0; }    .foo { padding: 0 25px 46px; }    .foo { padding: 4px 0 0 17px; }
```
```
Stylus  .foo { margin : 4px _; }    .foo { padding: _ 25px 46px; }    .foo { padding: 4px _ _ 17px; }
```

See [clockhand-stylus syntax](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand)


