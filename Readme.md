# shorthand-edge-omissions-stylus [![Build Status](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus.png)](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus)

Permit [clockhand-stylus](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand) in `padding`/`margin`.
```
.foo
  padding 1 _
  margin  _ 1 2 _

.foo {
  padding-top:1; padding-bottom:1;
  margin-right:1; margin-bottom:1;
}
```

### Install
```
npm install shorthand-edge-omissions-stylus --save

stylus.use(require('shorthand-edge-omissions-stylus')())

// global import, optional

stylus.import('shorthand-edge-omissions')
// or
stylus ... --import ./node_modules/better-clockhand-stylus
```

### Documentation
See [clockhand-stylus syntax](https://github.com/jasonkuhrt/clockhand-stylus/blob/master/README.md#stylus-clockhand-shorthand)

.  
.  
.  

### What

With omissions you never *have* to leave shorthand `margin`/`padding` syntax. CSS often forces you to leave shorthand even if you'd prefer not to. For instance you cannot specify just `margin-top`/`margin-bottom`.

Native CSS `padding`/`margin` [shorthand syntax](https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties) vs omissions:
```
.foo { margin : 4px 0; }    .foo { padding: 0 25px 46px; }    .foo { padding: 4px 0 0 17px; }
```
```
.foo { margin : 4px _; }    .foo { padding: _ 25px 46px; }    .foo { padding: 4px _ _ 17px; }
```

Omissions allow you to skip values, whereas CSS forces you to assign something.

.  
.  
.  

### Why
- It makes writing your CSS more fun
- Collecting all `padding` or `margin` side properties (`top`/`right`/`bottom`/`left`) on one line helps readers visually scan for dimensions information. 
- In my experience writing CSS can be a verbose, repetitive, and fatiguing experience; small effecientcy wins like ommissions will eventually make the load noticably lighter
- Writing `margin: 4px 0 0 17px;` when you don't actually need those zeros is error-prone, especially when using modern OOCSS patterns that break styling across discrete classes because `0` on a generic class might blow away an actually meaningful unit on another generic class. It is also a diservice to readers and logic to provide meaningless data for the sake of shorthand syntax.

.  
.  
.  

### Further Reading

Learn more about CSS shorthand: https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties
