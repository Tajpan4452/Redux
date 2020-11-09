import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllMovies, acceptMovie } from '../duck/operations.js'

const accept = (id) => {
  acceptMovie(id);
  console.log(id);
}
const MoviesContainer = ({movies, getAllMovies}) => {
  useEffect(() => { getAllMovies() }, [])

  return <ul onClick={accept(1)}>
    {movies.list.map(movie => <li onClick={accept(movie.id)}>{movie.title}</li>)}
  </ul>
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  getAllMovies: () => dispatch(getAllMovies()),
  acceptMovie: (id) => dispatch(acceptMovie(id))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(MoviesContainer)
