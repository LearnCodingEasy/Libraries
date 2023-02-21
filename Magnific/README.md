# Magnific
### Website => https://dimsemenov.com/plugins/magnific-popup/




## ======================= Single Element =====================
##### ======================= Html & Pug =====================


```
// Magnific Popup core CSS file 
link(rel="stylesheet" href="css/libs/Magnific/magnific-popup.css")

a(class="projects-icon" href="images/Projects-1.webp")

// jQuery 1.7.2+ or Zepto.js 1.0+
script(src="js/libs/jquery/JQuery-3.6.0.js")
// Magnific Include File Javascript
script(src="js/libs/Magnific/jquery.magnific-popup.js")
```


##### ======================= Javascript =====================

```
$(document).ready(function () {
  $('.projects-icon').magnificPopup({
    type: 'image'
    // other options
  });
});

```

## ======================= Group Element =====================
##### ======================= Html & Pug =====================


```
// Magnific Popup core CSS file 
link(rel="stylesheet" href="css/libs/Magnific/magnific-popup.css")

div(class="parent-container")
  a(href="images/Projects-1.webp")
  a(href="images/Projects-2.webp")
  a(href="images/Projects-3.webp")
  a(href="images/Projects-4.webp")

// jQuery 1.7.2+ or Zepto.js 1.0+
script(src="js/libs/jquery/JQuery-3.6.0.js")
// Magnific Include File Javascript
script(src="js/libs/Magnific/jquery.magnific-popup.js")
```


##### ======================= Javascript =====================

```
$(document).ready(function () {
  $('.parent-container').magnificPopup({
    type: 'image'
    // other options
    // For Arrow Left And Right
    gallery: {
      enabled: true,
    },
  });
});

```



