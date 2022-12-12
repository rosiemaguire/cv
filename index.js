document.getElementById("sullyhead").addEventListener("click", function () {
  console.log(document.getElementById("sullyhead").getAttribute("src"));
  if (
    document.getElementById("sullyhead").getAttribute("src") ===
    "images/Happy Sully.png"
  ) {
    document
      .getElementById("sullyhead")
      .setAttribute("src", "images/Krish.jpg");
    document.getElementById("sullyhead").setAttribute("alt", "KrishTheBish");
  } else {
    document
      .getElementById("sullyhead")
      .setAttribute("src", "images/Happy Sully.png");
    document.getElementById("sullyhead").setAttribute("alt", "Happy Sully");
  }
});
