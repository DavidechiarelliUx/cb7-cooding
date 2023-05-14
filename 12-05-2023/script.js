// esercizio 1
// Ricreare uno slider/carosello a piacere

// const imageList = [
//     "./assets/nike1.png",
//     "./assets/nike2.png",
//     "./assets/nike3.png",
//     "./assets/nike4.png",
//     "./assets/nike5.png",
//     "./assets/nike6.png",
//     "./assets/nike7.png",
//   ];

//   let imageIndex = 0;

//   const heroEl = document.createElement("div");
//   heroEl.classList.add("hero");

//   const sliderEl = document.createElement("div");
//   sliderEl.classList.add("slider");

//   const imgEl = document.createElement("img");
//   const buttonPrevEl = document.createElement("button");
//   const buttonNextEl = document.createElement("button");

//   imgEl.src = imageList[imageIndex];
//   imgEl.alt = "immagine " + (imageIndex + 1);
//   buttonPrevEl.textContent = "<";
//   buttonPrevEl.classList.add("prev");
//   buttonNextEl.textContent = ">";
//   buttonNextEl.classList.add("next");

//   sliderEl.appendChild(buttonPrevEl);
//   sliderEl.appendChild(imgEl);
//   sliderEl.appendChild(buttonNextEl);

//   heroEl.appendChild(sliderEl);

//   buttonPrevEl.addEventListener("click", () => {
//     imageIndex--;
//     if (imageIndex < 0) {
//       imageIndex = imageList.length - 1;
//     }
//     imgEl.src = imageList[imageIndex];
//     imgEl.alt = "immagine " + (imageIndex + 1);
//   });

//   buttonNextEl.addEventListener("click", () => {
//     imageIndex++;
//     if (imageIndex >= imageList.length) {
//       imageIndex = 0;
//     }
//     imgEl.src = imageList[imageIndex];
//     imgEl.alt = "immagine " + (imageIndex + 1);
//   });

//   document.body.appendChild(heroEl);

// --------------------slider a piacere finito

// Esercizio avanzato
// Aggiungere maggiori stilizzazioni e le icone di posizionamento.

const imageList = [
  "./assets/nike1.png",
  "./assets/nike2.png",
  "./assets/nike3.png",
  "./assets/nike4.png",
  "./assets/nike5.png",
  "./assets/nike6.png",
  "./assets/nike7.png",
];

let imageIndex = 0;

const heroEl = document.createElement("div");
heroEl.classList.add("hero");

const sliderEl = document.createElement("div");
sliderEl.classList.add("slider");

const imgEl = document.createElement("img");
const buttonPrevEl = document.createElement("button");
const buttonNextEl = document.createElement("button");

imgEl.src = imageList[imageIndex];
imgEl.alt = "immagine " + (imageIndex + 1);
buttonPrevEl.textContent = "<";
buttonPrevEl.classList.add("prev");
buttonNextEl.textContent = ">";
buttonNextEl.classList.add("next");

sliderEl.appendChild(buttonPrevEl);
sliderEl.appendChild(imgEl);
sliderEl.appendChild(buttonNextEl);

// Codice per gli indicatori di posizione
const dotContainer = document.createElement("div");
dotContainer.classList.add("dot-container");

for (let i = 0; i < imageList.length; i++) {
  const dotEl = document.createElement("span");
  dotEl.classList.add("dot");
  dotEl.addEventListener("click", () => {
    imageIndex = i;
    showImage();
  });
  dotContainer.appendChild(dotEl);
}

dotContainer.children[imageIndex].classList.add("active");
sliderEl.appendChild(dotContainer);

heroEl.appendChild(sliderEl);

//   funzione img corrente e successiva semplice
//   function showImage() {
//     imgEl.src = imageList[imageIndex];
//     imgEl.alt = "immagine " + (imageIndex + 1);
//     dotContainer.querySelector(".active").classList.remove("active");
//     dotContainer.children[imageIndex].classList.add("active");
//   }

function showImage() {
  imgEl.classList.add("hidden");
  setTimeout(() => {
    imgEl.src = imageList[imageIndex];
    imgEl.alt = "immagine " + (imageIndex + 1);
    imgEl.classList.remove("hidden");
    dotContainer.querySelector(".active").classList.remove("active");
    dotContainer.children[imageIndex].classList.add("active");
  }, 500);
}

buttonPrevEl.addEventListener("click", () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = imageList.length - 1;
  }
  showImage();
});

buttonNextEl.addEventListener("click", () => {
  imageIndex++;
  if (imageIndex >= imageList.length) {
    imageIndex = 0;
  }
  showImage();
});

document.body.appendChild(heroEl);

//   set interval cambiare immagine ogni 3 secondi
const intervalTime = 3000;

function startSlideShow() {
  setInterval(() => {
    imageIndex++;
    if (imageIndex >= imageList.length) {
      imageIndex = 0;
    }
    showImage();
  }, intervalTime);
}
startSlideShow();
