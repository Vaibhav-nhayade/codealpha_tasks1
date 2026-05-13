const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1025/600/400",
  "https://picsum.photos/id/1039/600/400",
  "https://picsum.photos/id/1043/600/400",
  "https://picsum.photos/id/1062/600/400"
];

let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
  currentIndex = index;

  document.getElementById("lightbox").style.display = "flex";

  document.getElementById("lightbox-img").src = images[currentIndex];
}

// Close Lightbox
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Next / Previous Image
function changeImage(step) {

  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  document.getElementById("lightbox-img").src = images[currentIndex];
}

// Filter Images
function filterImages(category, event) {

  const items = document.querySelectorAll(".gallery-item");

  const buttons = document.querySelectorAll(".filter-buttons button");

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");

  items.forEach(item => {

    if (category === "all") {
      item.style.display = "block";
    }

    else {

      if (item.classList.contains(category)) {
        item.style.display = "block";
      }

      else {
        item.style.display = "none";
      }

    }

  });

}
