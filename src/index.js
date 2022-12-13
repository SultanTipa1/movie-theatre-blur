//making a request to GET data
fetch("http://localhost:3000/films")
  .then((resp) => resp.json())
  .then((films) => renderFilms(films));

// const buyTickets = document.querySelector("#buy-ticket");
// buyTickets.addEventListener(`submit`, handleBuyTickets);

const renderFilms = (films) => {
  // console.log(films);
  const filmsList = document.getElementById(`films`);
  films.forEach((film) => {
    const li = document.createElement("li");
    li.innerText = film.title;
    filmsList.append(li);
    li.addEventListener(`click`, () => renderShowing(film));
  });
};
//displaying film details on the page
const renderShowing = (film) => {
  // console.log(film);
  document.getElementById(`poster`).src = film.poster;
  document.getElementById(`title`).innerHTML = film.title;
  document.getElementById(`film-info`).innerHTML = film.description;
  document.getElementById(`runtime`).innerHTML = film.runtime;
  document.getElementById(`showtime`).innerHTML = film.showtime;
  document.getElementById(`capacity`).innerHTML = film.capacity;
  document.getElementById(`tickets_sold`).innerHTML = film.tickets_sold;
  const available_tickets = film.capacity - film.tickets_sold;
  // console.log(available_tickets);
  document.getElementById(
    "available-tickets"
  ).innerHTML = `${available_tickets} available tickets`;
};

const button = document.getElementById(`buy-ticket`);
button.addEventListener(`click`, () => {
  const available_Tickets = parseInt(
    document.getElementById(`available-tickets`).innerHTML
  );
  if (available_Tickets > 0) {
    const availableTickets = available_Tickets -=1;
    document.getElementById(`available-tickets`).innerHTML = availableTickets;
  } else {
    alert("sorry,tickets  are sold out.");
  }
});

// function handleBuyTickets(films) {
//   e.preventDefault();
//   let buyTicket = (document.getElementById(
//     "available-tickets"
//   ).innerHTML = `${available_tickets} available tickets`);
// }
