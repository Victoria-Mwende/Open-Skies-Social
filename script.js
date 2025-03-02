document.addEventListener("DOMContentLoaded", function () {
    let images = [
        "images/kilifi7.jpg",
        "images/kilifi4.jpg",
        "images/kilifi5.jpg",
        "images/kilifi3.jpg",
        "images/kilifi2.jpg",
        "images/kilifi1.jpg",
        "images/lamu3.jpg"
    ];

    let index = 0;
    let backgroundSection = document.querySelector(".background-container");

    function changeBackground() {
        backgroundSection.style.backgroundImage = `url(${images[index]})`;
        backgroundSection.style.backgroundSize = "cover";
        backgroundSection.style.backgroundPosition = "center";
        backgroundSection.style.transition = "background 1s ease-in-out";
        index = (index + 1) % images.length;
    }

    // Set initial background and start interval
    changeBackground();
    setInterval(changeBackground, 5000); // Change every 5 seconds
});
const images = [
    "images/background1.jpg",
    "images/background2.jpg",
    "images/background3.jpg"
  ];
  
  let index = 0;
  const hero = document.querySelector(".hero");
  
  function changeBackground() {
    hero.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
  }
  
  setInterval(changeBackground, 4000);
  changeBackground();
  