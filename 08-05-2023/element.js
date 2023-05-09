function createCard(obj) {
const cardEl = document.createElement ('div');
const imgEl = document.createElement ('img');
const titleEl = document.createElement ("h2");

cardEl.className = "animal-card";
imgEl.src = obj.imgUrl;
imgEl.alt = obj.title;
titleEl.textContent = animals [0].title;

cardEl.append (imgEl, titleEl);
document.body.appendChild (cardEl); 
}

const animals = [
  {
    id: 1,
    title: "Cat",
    imgUrl: "https://freepngimg.com/download/cat/22193-3-adorable-cat.png",
  },
  {
    id: 2,
    title: "Dog",
    imgUrl: "https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png",
  },
  {
    id: 3,
    title: "Dino",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/009/378/085/original/cute-cartoon-dinosaur-character-free-png.png",
  },
  {
    id: 4,
    title: "Croco",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/1-2-crocodile-free-png-image.png",
  },
];
for(let obj of animals) {
    createCard (obj)
}
// createCard (animals[0]);
// createCard (animals[1]);
// createCard (animals[2]);
// createCard (animals[3]);
// const cardEl = document.createElement ('div');
// const imgEl = document.createElement ('img');
// const titleEl = document.createElement ("h2");

// cardEl.className = "animal-card";
// imgEl.src = animals[1].imgUrl;
// imgEl.alt = animals[1].title;
// titleEl.textContent = animals [1].title;

// cardEl.append (imgEl, titleEl);
// document.body.appendChild (cardEl);
