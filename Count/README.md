# CountTo
### Website => https://github.com/mhuggins/jquery-countTo


##### ======================= Html & Pug =====================


```
span(class="timer" data-from="25" data-to="75")

// Magnific Include File Javascript
script(src="js/libs/ContTo/jquery.countTo.js")
```


##### ======================= Javascript =====================

```

<script type="text/javascript">
  $('.timer').countTo();
</script>

```

##### ======================= Html & Pug =====================


```
span(class="timer" data-from="0" data-to="100" data-speed="5000" data-refresh-interval="50")
// Magnific Include File Javascript
script(src="js/libs/ContTo/jquery.countTo.js")
```

##### ======================= Javascript =====================

```
<script type="text/javascript">
  $('.timer').countTo();
</script>

```

##### ======================= Html & Pug =====================


```
span(class="timer" )
// Magnific Include File Javascript
script(src="js/libs/ContTo/jquery.countTo.js")
```

##### ======================= Javascript =====================

```
<script type="text/javascript">
  $('.timer').countTo({from: 0, to: 500});
</script>

```

##### ======================= Html & Pug =====================


```
span(class="timer" )
// Magnific Include File Javascript
script(src="js/libs/ContTo/jquery.countTo.js")
```

##### ======================= Javascript =====================

```
<script type="text/javascript">
  $('.timer').countTo({
    from: 50,
    to: 2500,
    speed: 1000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });
</script>

```
