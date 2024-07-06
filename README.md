# Movie App

A React application to display a list of movies, with the ability to filter by genre and dynamically load more movies as the user scrolls. The application fetches data from The Movie Database (TMDb) API.

## Features

- Display a list of movies sorted by popularity
- Show movie details including title, image, genre, cast, director, and a short description
- Filter movies by genre
- Load more movies dynamically as the user scrolls
- Smooth scrolling behavior for a better user experience

## Technologies Used

- React
- Axios for API calls
- styled-components for styling

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/movie-app.git
    cd movie-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

### Project Structure

- `src/App.js`: The main application component.
- `src/components/GenreFilter.js`: Component to display and handle genre filtering.
- `src/components/MovieCard.js`: Component to display individual movie details.
- `src/components/MovieList.js`: Component to fetch and display the list of movies.
- `src/App.css`: Global styles for the application.

### API Details

The application uses the following TMDb API endpoints:

- To fetch the list of genres: `https://api.themoviedb.org/3/genre/movie/list`
- To fetch the list of movies: `https://api.themoviedb.org/3/discover/movie`
- To fetch movie details: `https://api.themoviedb.org/3/movie/{movie_id}`

The API key used in the project is `2dca580c2a14b55200e784d157207b4d`. Please do not change this key.

### Custom Components

- **MovieCard**: Displays the movie's image, title, genres, cast, director, and description.
- **GenreFilter**: Displays genre buttons for filtering the movie list.

### Notes

- The application initially loads movies from the year 2012.
- As the user scrolls, it loads movies from previous or next years based on the scroll direction.
- Movies are fetched dynamically based on the selected genres.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Movie Database (TMDb) API for providing movie data.

## Author

(https://github.com/blackstonevignesh)

