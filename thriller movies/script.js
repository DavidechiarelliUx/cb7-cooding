import { API_KEY, BASE_URL, API_URL, IMG_URL } from './utils/http.js';
import { cE } from './utils/fn.js';

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  data.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = cE('div');
    movieEl.classList.add('movie');

    const imgEl = cE('img');
    imgEl.src = IMG_URL + poster_path;
    imgEl.alt = title;
    movieEl.appendChild(imgEl);

    const movieInfoEL =  cE ('div');
    movieInfoEL.classList.add('movie_info');

    const titleEl = cE('div');
    titleEl.textContent = title;
    movieInfoEL.appendChild(titleEl);

    const ratingEL = cE ('span');
    ratingEL.textContent = vote_average;
    ratingEL.classList.add(getColor(vote_average));
    movieInfoEL.appendChild(ratingEL);

    movieEl.appendChild(movieInfoEL);

    const overviewEl =cE('div');
    overviewEl.classList.add('overview');

    const overviewTitleEl= cE ('h3');
    overviewTitleEl.textContent = 'Overview';
    overviewEl.appendChild(overviewTitleEl);

    const overviewTextEl = cE ('p');
    overviewTextEl.textContent = overview;
    overviewEl.appendChild(overviewTextEl);

    movieEl.appendChild(overviewEl);
    
    main.appendChild(movieEl);

  })
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