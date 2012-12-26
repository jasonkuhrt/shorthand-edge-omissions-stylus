# CSS Clockhand Omissions
Omitted values syntax added to CSS clockhand syntax.

  .  
  .  
  .  

### Examples (stylus code followed by css output)

Example 1

    .foo-selector
      padding 4rem _



    .foot-selector {
      padding-top:    4rem;
      padding-bottom: 4rem;
    }



Example 2

    .foo-selector
      padding 4rem 4rem _ 4rem



    .foot-selector {
      padding-top:   4rem;
      padding-right: 4rem;
      padding-left:  4rem;
    }
