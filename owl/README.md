# Owl
### Website => https://owlcarousel2.github.io/OwlCarousel2/




##### ======================= Html & Pug =====================


```
// Owl
link(rel="stylesheet" href="css/libs/owl/owl.theme.default.min.css")
link(rel="stylesheet" href="css/libs/owl/owl.carousel.min.css")

// Owl
// Website = https://owlcarousel2.github.io/OwlCarousel2/
// Owl Include File Css
// link(rel="stylesheet" href="css/libs/owl/owl.theme.default.min.css")
// link(rel="stylesheet" href="css/libs/owl/owl.carousel.min.css")
// Owl Include File Javascript
// script(src='js/libs/owl/owl.carousel.min.js') 
div(class="owl-wrapper")
  div(class="owl-carousel owl-theme" id="owl-carousel")
    // Single Item
    div(class="item") one
    // Single Item
    div(class="item") one
    // Single Item
    div(class="item") one
    // Single Item
    div(class="item") one
    // Single Item
    div(class="item") one

// Owl
script(src='js/libs/owl/owl.carousel.min.js')
```


##### ======================= Javascript =====================

```
/*
=====================================================
Todo =============== Owl Carousel ===================
=====================================================
*/
$(document).ready(function () {
  // owl
  $(".owl-wrapper .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

```



