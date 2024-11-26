// JavaScript for Modal Gallery Interaction

// Get the modal, images, and buttons
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Get all images in the gallery
const galleryImgs = document.querySelectorAll(".gallery-img");

let currentImgIndex = 0;

// Open the modal and show clicked image
galleryImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalCaption.innerText = img.getAttribute("data-caption");
    currentImgIndex = index;
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Show the previous image in the modal
prevBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex - 1 + galleryImgs.length) % galleryImgs.length;
  const newImg = galleryImgs[currentImgIndex];
  modalImg.src = newImg.src;
  modalCaption.innerText = newImg.getAttribute("data-caption");
});

// Show the next image in the modal
nextBtn.addEventListener("click", () => {
  currentImgIndex = (currentImgIndex + 1) % galleryImgs.length;
  const newImg = galleryImgs[currentImgIndex];
  modalImg.src = newImg.src;
  modalCaption.innerText = newImg.getAttribute("data-caption");
});
