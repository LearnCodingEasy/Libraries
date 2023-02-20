# Mix It Up
### Website => https://www.kunkalabs.com/mixitup/




##### ======================= Html & Pug =====================


```
.mixitup-wrapper
  .mixitup-inner
    .mixitup-buttons
      .mixitup-buttons-wrapper
        .mixitup-buttons-inner
          button(class="mixitup-button mixitup-control-active" data-filter="all") All Cases
          button(class="mixitup-button" data-filter=".one") one
          button(class="mixitup-button" data-filter=".tow") tow
          button(class="mixitup-button" data-filter=".three") three
          button(class="mixitup-button" data-filter=".four") four
    .mixitup-items
      .mixitup-items-wrapper
        .mixitup-items-inner
          div(class="mixitup-item mix one") item one
          div(class="mixitup-item mix tow") item tow
          div(class="mixitup-item mix three") item three
          div(class="mixitup-item mix four") item four
          div(class="mixitup-item mix five") item five

// mixitup Include File Javascript
script(src='js/libs/mixitup/mixitup.min.js') 
```


##### ======================= Javascript =====================

```

// To Make Plugin Mix It Up Work
var mixer = mixitup(".mixitup-items-inner", {
  animation: {
    duration: 300,
    effectsOut: "fade translateX(-100%)",
  },
});
```



