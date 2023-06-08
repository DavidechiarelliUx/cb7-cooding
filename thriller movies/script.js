import { API_KEY, BASE_URL, API_URL, IMG_URL } from './utils/http.js';
import { cE, qS } from './utils/fn.js';
import {navToggle, links } from './utils/nav.js';

const rootEl = qS("#root");
const headerEl = cE('header');
const main = qS('#main'); 

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
  data.forEach(movie => {
    const { id, title, poster_path, vote_average, } = movie;
    const movieEl = cE('div');
    movieEl.classList.add('movie');
    const imgEl = cE('img');
    imgEl.src = IMG_URL + poster_path;
    imgEl.alt = title;
    imgEl.setAttribute('data-id', id);
    movieEl.appendChild(imgEl);
    const movieInfoEL = cE('div');
    movieInfoEL.classList.add('movie_info');
    const titleEl = cE('div');
    titleEl.textContent = title;
    movieInfoEL.appendChild(titleEl);
    const ratingEL = cE ('span');
    ratingEL.textContent = vote_average;
    ratingEL.classList.add(getColor(vote_average));
    movieInfoEL.appendChild(ratingEL);
    movieEl.appendChild(movieInfoEL);
    const addToFavoritesButton = cE('button');
    addToFavoritesButton.classList.add('add-to-favorites');
    addToFavoritesButton.textContent = 'Aggiungi ai preferiti';
    movieEl.appendChild(addToFavoritesButton);
    main.appendChild(movieEl);

    imgEl.addEventListener('click', () => {
      window.location.href = 'pages/description-movie.html?id=' + id;
    });

    addToFavoritesButton.addEventListener('click', () => {
      addToFavoritesList(movie);
      renderFavoritesList();
    });
  });
}

function getColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

function addToFavoritesList(movie) {
  const favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favoritesList.some(favorite => favorite.id === movie.id)) {
    favoritesList.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  }
}

function renderFavoritesList() {
  const favoritesList = getFavoritesList();
  const favoritesEl = qS('#favorites');

  while (favoritesEl.firstChild) {
    favoritesEl.removeChild(favoritesEl.firstChild);
  }

  favoritesList.forEach(movie => {
    const { id, title, poster_path } = movie;
    const favoriteEl = document.createElement('div');
    favoriteEl.classList.add('favorite');
    const imgEl = document.createElement('img');
    imgEl.src = IMG_URL + poster_path;
    imgEl.alt = title;
    favoriteEl.appendChild(imgEl);
    const starEl = document.createElement('span');
    starEl.classList.add('star');
    const starIcon =document.createTextNode('\u2605');
    starEl.appendChild(starIcon);
    favoriteEl.appendChild(starEl);
    const titleEl = document.createElement('div');
    titleEl.textContent = title;
    titleEl.classList.add('titleFavorite');
    favoriteEl.appendChild(titleEl);
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-from-favorites');
    removeButton.textContent = 'Rimuovi dai preferiti';
    favoriteEl.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
      removeFromFavoritesList(id);
      renderFavoritesList();
    });
    imgEl.addEventListener('click', () => {
      window.location.href = 'pages/description-movie.html?id=' + id;
    });
    favoritesEl.appendChild(favoriteEl);
  });
}

function getFavoritesList() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return favorites;
}

function removeFromFavoritesList(movieId) {
  const favoritesList = getFavoritesList();
  const updatedFavoritesList = favoritesList.filter(movie => movie.id !== movieId);
  localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));
}

function isFavorite(movieId) {
  const favoritesList = getFavoritesList();
  return favoritesList.some(movie => movie.id === movieId);
}