// document.getElementById("sullyhead").addEventListener("click", function () {
//   console.log(document.getElementById("sullyhead").getAttribute("src"));
//   if (
//     document.getElementById("sullyhead").getAttribute("src") ===
//     "images/Happy Sully.png"
//   ) {
//     document
//       .getElementById("sullyhead")
//       .setAttribute("src", "images/Krish.jpg");
//     document.getElementById("sullyhead").setAttribute("alt", "KrishTheBish");
//   } else {
//     document
//       .getElementById("sullyhead")
//       .setAttribute("src", "images/Happy Sully.png");
//     document.getElementById("sullyhead").setAttribute("alt", "Happy Sully");
//   }
// });
$("#sullyhead").on("click", function() {
 
  if (
    $("#sullyhead").attr("src") === "images/Happy Sully.png"
  ) {
    $("#sullyhead").fadeOut();
    setTimeout(function() {
      $("#sullyhead").attr("src", "images/Krish.jpg");
      $("#sullyhead").attr("alt", "Krish the Bish");
      $("#sullyhead").fadeIn();
    }, 250);
  } else {
    $("#sullyhead").fadeOut();
    setTimeout(function() {
      $("#sullyhead").attr("src", "images/Happy Sully.png");
      $("#sullyhead").attr("alt", "Happy Sully");
      $("#sullyhead").fadeIn();
    }, 250);
  }
});