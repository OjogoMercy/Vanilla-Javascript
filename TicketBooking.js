console.log('Ticket Booking')
// list of movies and availableSeats
const movies = [
    { title: "The Matrix", availableSeats: 25 },
    { title: "Inception", availableSeats: 10 },
    { title: "Interstellar", availableSeats: 5 },
    { title: "Spider-Man: No Way Home", availableSeats: 0 },  // Sold out
    { title: "The Lion King", availableSeats: 15 }
];
// todisplay the number of available seats and the movie 
const bookMovies = movies.filter ((movie) => movie.title)
  bookMovies.forEach((movie) =>{
    console.log(`Movie:${movie.title} -- Available seats ${movie.availableSeats}`)
  })

//   booking a seat for a movie 
console.log('Booking for a movie')
const movieName = "The Lion King"
for (let i = 0; i < movies.length; i++){
    if (movies[i].title === movieName){
            if (movies[i].availableSeats > 0 ){
                movies[i].availableSeats = movies[i].availableSeats - 1;
                console.log(`Seat booked for ${movies[i].title}`)
                console.log(`Available Seats left ${movies[i].availableSeats}`);
            }
            else{
                console.log(`${movies[i].title} is sold out `);
            }
    }
}
// To cancel a booking 
const cancelMovie = "Interstellar"
for (let i = 0; i < movies.length; i++){
    if (movies[i].title === movieName){
        if (movies[i].availableSeats > 0){
            movies[i].availableSeats = movies[i].availableSeats + 1;
            console.log(`Seat cancelled for ${movies[i].title}`)
            console.log(`Available seats left :: ${movies[i].availableSeats}`)
        }
        else {
            console.log(`${movies[i].title} is sold out already `)
        }
    }
}