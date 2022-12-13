fetch("http://localhost:3000/films")
  .then((resp) => resp.json())
  .then((films) => renderFilms(films));

const renderFilms = (films) => {
  console.log(films);
  const filmsList = document.getElementById(`films`);
  films.forEach((film, i) => {
    const li = document.createElement("li");
    li.innerText = film.title;
    filmsList.append(li);
    li.addEventListener(`click`, () => renderShowing(film));
  });
};

const renderShowing = (film) => {
  console.log(film);

  document.getElementById(`poster`).src = film.poster;
  document.getElementById(`title`).innerHTML = film.title;
  document.getElementById(`runtime`).innerHTML = film.runtime;
  document.getElementById(`showtime`).innerHTML = film.showtime;
  document.getElementById(`available-tickets`).innerHTML =
    film.availabletickets;
  console.log(film);
};

const renderMoreContent = (film) => {
  const buyTicketButton = document.getElementById(`buy-ticket`);
  buyTicketButton.addEventListener(`click`, () => {
    const availableTickets = parseInt(
      document.getElementById(`available-tickets`).innerHTML
    );

    if (availableTickets > 0) {
      const newAvailableTickets = capacity - 1;

      document.getElementById(`available-tickets`).innerHTML =
        newAvailableTickets;
    } else {
      alert("sorry,tickets sold out");
    }
  });
};
