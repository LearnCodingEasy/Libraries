# Count Down Circular 
### Website => https://www.jqueryscript.net/time-clock/Simple-jQuery-Html5-Based-360-Degree-Countdown-Timer-countdown360.html
### Website => https://www.jqueryscript.net/demo/Simple-jQuery-Html5-Based-360-Degree-Countdown-Timer-countdown360/


### ======================= Html & Pug =====================
###### ======================= Html & Pug =====================


```

<div id="countdown"></div>

// Count Down Circular  Include File Javascript

<script src="js/libs/ContTo/jquery.countTo.js"></script>
```
###### ======================= Pug ============================

```
div(id="countdown")

// Count Down Circular  Include File Javascript
script(src="js/libs/ContTo/jquery.countTo.js")
```


##### ======================= Javascript =====================

```
/*
=====================================================
Todo =============== Count Down Circular  ===========
=====================================================
*/
$("#countdown")
  .countdown360({
    // Size
    radius: 100,
    // Seconds On Time
    seconds: 10,
    // Font Color
    fontColor: "#FFFFFF",
    // Background color
    fillStyle: "#0053ff",
    // Border color
    strokeStyle: "#232b87",
    // Border Width
    strokeWidth: 25,
    // Smooth Border Down
    smooth: false,
    // Font Family
    fontFamily: "cairo",
    // Font Size
    fontSize: 50,
    // Font Weight
    fontWeight: 700,
    //
    autostart: false,
    //
    // startOverAfterAdding: true,
    //
    // label: ["second", "seconds"],
    onComplete: function () {
      console.log("Count Down Circular Done");
    },
  })
  .start();

```



