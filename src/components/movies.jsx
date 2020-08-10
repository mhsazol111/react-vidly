import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import { paginate } from '../utilities/paginate';
import ListGroup from './common/listGroup';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    perPage: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  };

  componentDidMount() {
    const genres = [{ _id: '', name: 'All Genres' }, ...getGenres()];

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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.setState({ sortColumn });
  };

  render() {
    const { length: moviesCount } = this.state.movies;
    const {
      movies,
      perPage,
      selectedGenre,
      currentPage,
      sortColumn,
    } = this.state;

    if (moviesCount === 0) return <h3>There is no movie found!</h3>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const moviesWithPagination = paginate(sorted, perPage, currentPage);

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
            <MoviesTable
              movies={moviesWithPagination}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
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
