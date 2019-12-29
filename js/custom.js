let search = document.getElementById('searchText');

search.addEventListener('keypress', e => {
  let searchText = e.target.value;
  getMovies(searchText); //calling getmovies function as calback function
});

function getMovies(searchText) {
  let api = `http://www.omdbapi.com/?s=${searchText}&apikey=34696847`;
  window
    .fetch(api)
    .then(data => {
      // next step is converting Response data into json object...
      //how to convert res obj into json objects
      let jsonData = data.json();
      jsonData
        .then(movie => {
          let movies = movie.Search;
          let output = '';
          for (let imdbMovie of movies) {
            output += `
            <div class="container1">
            
            <div class="card" style="width: 18rem;">
                 <img src=${imdbMovie.Poster} class="card-img-top" alt="...">
                  <div class="card-body">
                  <h5 class="card-title">${imdbMovie.Title}</h5>
                  <span class="badge badge-info">${imdbMovie.Year}</span>
                  <span class="badge badge-success">${imdbMovie.imdbID}</span>
                  <span class="badge badge-danger">${imdbMovie.Type}</span>
                  <button class="btn btn-primary btn-block 
                  float-right mt-2">Go to Imdb</button>
            </div>
            </div>
               </div> 
            
                `;
            document.getElementById('template').innerHTML = output;
          }
        })
        .catch(); //if rejects executing catch block
    })
    .catch(err => console.log(err)); //fetching data from omdb server...
}
