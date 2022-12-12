document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
});
function fetchFilms (){
fetch("http://localhost:3000/films")
  .then((resp) => resp.json())
  .then((json) => console.log(json));
}
  
