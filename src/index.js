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
  document.getElementById(`film-info`).innerHTML = film.description;
  document.getElementById(`runtime`).innerHTML = film.runtime;
  document.getElementById(`showtime`).innerHTML = film.showtime;
  document.getElementById(`capacity`).innerHTML = film.capacity;
  document.getElementById(`tickets_sold`).innerHTML = film.tickets_sold;
  document.getElementById(`available-tickets`).innerHTML =
    film.availabletickets;
  const available_tickets = film.capacity - film.tickets_sold;
  console.log(available_tickets);
  // film.availabletickets.appendChild(available_tickets);
  const button = document.getElementById(`buy-ticket`);
  button.addEventListener(`click`, () => {
    buyTicketButton(films);
  });
};
const buyTicketButton = () => {
  const available_tickets = films.capacity - films.tickets_sold;
  return available_tickets;
};
