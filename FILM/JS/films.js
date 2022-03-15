//Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
    let result = [];}
result = array.map(movie => {
  return movie.director;    
});
console.table(result);
  //  return result


   // result = array.map(function director(movie) {
   //     return movie.director;
   //   });
   // console.table(result);
    //return result;


//Exercise 2: get the films of a certain director
function getMoviesFromDirector(array, director){
    const films = array.filter(movie => movie.director == director);
    console.table(films);
    return films;
}


//result = movies.map(function director(movie) {
    //return movie.director
//})
//console.table(result);
// /* export default films; */
//if (typeof module !== 'undefined') {
  //  module.exports = movies;
  //}
