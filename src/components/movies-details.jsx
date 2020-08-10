import React from 'react';

const MoviesDetails = ({ match, history, location }) => {
  const handleSave = () => {
    history.replace('/movies');
  };

  return (
    <div>
      <h1 className="text-center mb-3">
        Movie Name: {location.state.movie.title}
      </h1>
      <h3>Movies form {match.params.id}</h3>
      <button type="button" className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default MoviesDetails;
