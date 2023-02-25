// Circular
$("#countdown")
  .countdown360({
    // Size
    radius: 100,
    // Seconds On Time
    seconds: 1000,
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

// Count To
$(".timer").countTo({
  from: 50,
  to: 2500,
  speed: 100000,
  refreshInterval: 50,
  formatter: function (value, options) {
    return value.toFixed(options.decimals);
  },
  onUpdate: function (value) {
    console.debug(this);
  },
  onComplete: function (value) {
    console.debug(this);
  },
});
