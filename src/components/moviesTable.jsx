import React, { Component } from 'react';
import Like from './common/like';
import { Link } from 'react-router-dom';

class MoviesTable extends Component {
  render() {
    let { movies, onLike, onDelete, onSort } = this.props;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th onClick={() => onSort('title')} scope='col'>
              Title
            </th>
            <th onClick={() => onSort('genre.name')} scope='col'>
              Genre
            </th>
            <th onClick={() => onSort('numberInStock')} scope='col'>
              Stock
            </th>
            <th onClick={() => onSort('dailyRentalRate')} scope='col'>
              Rate
            </th>
            <th></th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <th scope='row'>
                <Link
                  to={{
                    pathname: `/movies/${movie._id}`,
                    state: {
                      movie,
                    },
                  }}
                >
                  {movie.title}
                </Link>
              </th>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <th>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </th>
              <td>
                <button
                  className='btn btn-danger btn-sm'
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
