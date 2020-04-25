import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utilities/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    perPage: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const { movies, perPage, selectedGenre, currentPage } = this.state;

    if (moviesCount === 0) return <h3>There is no movie found!</h3>;

    const filteredMovies = selectedGenre
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

    const moviesWithPagination = paginate(filteredMovies, perPage, currentPage);

    return (
      <div className="row">
        <div className="col-lg-3 col-sm-12">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="movies">
            <h2>Total Movies Found: {filteredMovies.length}</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th></th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {moviesWithPagination.map((movie) => (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <th>
                      <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
                    </th>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.handleDelete(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filteredMovies.length}
              perPage={perPage}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
