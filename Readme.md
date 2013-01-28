# Shorthand Omissions for [Stylus](http://learnboost.github.com/stylus/)
[![Build Status](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus.png)](https://travis-ci.org/jasonkuhrt/better-clockhand-stylus)

Allow omitted values in shorthand 1-value, 2-value, 3-value, 4-value `padding` and `margin`.

.  
.  
.  

### Examples
2-value
```
.foo-selector
  padding 4rem _
```
```  
.foot-selector {
  padding-top   : 4rem;
  padding-bottom: 4rem;
}
```

.  
3-value

```
.foo-selector
  padding 4rem 4rem _ 4rem
```
```
.foot-selector {
  padding-top  : 4rem;
  padding-right: 4rem;
  padding-left : 4rem;
}
```

.  
.  
.  

### What

Native CSS `padding`/`margin` [shorthand syntax](https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties) vs omissions:
```
.foo { margin : 4px 0; }    .foo { padding: 0 25px 46px; }    .foo { padding: 4px 0 0 17px; }
```
```
.foo { margin : 4px _; }    .foo { padding: _ 25px 46px; }    .foo { padding: 4px _ _ 17px; }
```

With omissions you never *have* to leave shorthand `margin`/`padding` syntax. CSS often forces you to leave shorthand even if you'd prefer not to. For instance you cannot specify just `margin-top`/`margin-bottom`.

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

### License

MIT

### Further Reading

Learn more about CSS shorthand: https://developer.mozilla.org/en-US/docs/CSS/Shorthand_properties
