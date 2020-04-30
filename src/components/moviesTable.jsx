import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  render() {
    let { movies, onLike, onDelete } = this.props;

    return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Genre</th>
            <th scope='col'>Stock</th>
            <th scope='col'>Rate</th>
            <th></th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <th scope='row'>{movie.title}</th>
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
