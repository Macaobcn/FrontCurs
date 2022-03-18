//Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = [];

  result = array.map(movie => {
    return movie.director;
  });
  console.table(result);
  //  return result
}

// result = array.map(function director(movie) {
//     return movie.director;
//   });
// console.table(result);
//return result;


//Exercise 2: get the films of a certain director
function getMoviesFromDirector(array, director) {
  const films = array.filter(movie => movie.director == director);
  console.table(films);
  return films;
}

//console.log("Director: " + director)

//result = movies.map(function director(movie) {
//return movie.director
//})
//console.table(result);
// /* export default films; */
//if (typeof module !== 'undefined') {
//  module.exports = movies;
//}

//Exercise 3: Calculate the average of the films of a given director
function moviesaverageOfDirector(movies, director)  {
  //Filtrem totes les pelis del director seleccionat
  const filmsByDirector = movies.filter(movie => movie.director == director);
  console.log("Director: " + director);
  console.log(filmsByDirector);

  const scores = filmsByDirector.reduce((contador, peli) => {
    console.log("film: " + peli.title + " Score: " + peli.score);
    return contador + peli.score;
  })
}
// Exercise 4

//function OrderAlphabetically(array)
//{
  //Endreçem amb Javascript modern
  //array.sort((a,b) => a.title < b.title ? -1 : 1);

  //Endreçem amb Javascript clàssic
 // array.sort(function (a, b) {
   // if (a.title > b.title {
     // return 1
    //})
  //})
//}