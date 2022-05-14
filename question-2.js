const container = document.querySelector(".container");
const gameName = document.querySelector(".name");
const gameRating = document.querySelector(".rating");
const gameTags = document.querySelector(".tags");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3533b7792e1b452baa8d22576f4b65b0";

async function getName() {
  const response = await fetch(url);

  const results = await response.json();

  const gameList = results.results;

  for (let i = 0; i < gameList.length; i++) {
    if (i > 7) {
      break;
    }
    gameName.innerHTML += `<li>${gameList[i].name}</li>`;
  }
}

getName();

async function getRating() {
  const response = await fetch(url);

  const results = await response.json();

  const gameList = results.results;

  for (let i = 0; i < gameList.length; i++) {
    if (i > 7) {
      break;
    }
    gameRating.innerHTML += `<li>${gameList[i].rating}</li>`;
  }
}

getRating();

async function getTags() {
  const response = await fetch(url);

  const results = await response.json();

  const gameList = results.results;

  for (let i = 0; i < gameList.length; i++) {
    if (i > 7) {
      break;
    }
    gameTags.innerHTML += `<li>${gameList[i].tags.length}</li>`;
  }
}

getTags();
