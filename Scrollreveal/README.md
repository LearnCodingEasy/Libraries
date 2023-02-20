# Scroll Reveal Js
### Website => https://scrollrevealjs.org/




##### ======================= Html & Pug =====================


```
// Scroll Reval Animation Include File Javascript
script(src='js/libs/Scrollreveal/scrollreveal.min.js') 
```


##### ======================= Javascript =====================

```

// To Make Plugin Scroll Reval Animation Work
const sr = ScrollReveal({
  // مسافة
  distance: "60px",
  // مدة
  duration: 2800,
  // يمكنك القيام بذلك عدة مرات حسب الحاجة
  reset: true,
});

sr.reveal(`.projects-section, .footer__rights`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.about__data`, {
  origin: "left",
});

sr.reveal(`.about, .video`, {
  origin: "right",
  interval: 100,
});

```



