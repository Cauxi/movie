const omdbapiUrl = "http://www.omdbapi.com/";
const apiKey = "adf1f2d7";

// Here is 2 other API key if the one above doesn't work anymore:
// - 48727053
// - 8691812a


const interpolation = (movie) => {
  const movie1 = (
    `<div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <div class="card mb-2">
      <img src=${movie.Poster} class="card-img-top" alt=${movie.Title}>
      <div class="card-body">
        <span class="badge bg-primary mb-2">${movie.Year}</span>
        <h5 class="card-title">${movie.Title}</h5>
      </div>
    </div>
  </div>`
  );
  const moviecards = document.querySelector("#movie-cards");
  moviecards.insertAdjacentHTML("beforeend", movie1);
};


// Your turn to code!
const search = (event) => {
  event.preventDefault();
  const input = document.querySelector("#movie-name").value;
  const newUrl = `http://www.omdbapi.com/?s=${input}&apikey=22591ffd`;
  console.log(newUrl);
  fetch(newUrl)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const movies = data.Search;
      movies.forEach((movie) => {
        const title = movie.Title;
        const year = movie.Year;
        const poster = movie.Poster;
        console.log(title, year, poster);
        interpolation(movie);
      });
    });
};

const button = document.querySelector(".btn");
button.addEventListener("click", search);
