import actions from './actions'

const fetchMovies = async () => {
  const response = await fetch('http://localhost:8000/ajax/allmovies', { method: 'GET' })
  const json = await response.json()

  return json
}
const fetchAcceptMovie = async (id) => {
  const response = await fetch('http://localhost:8000/ajax/acceptmovie', { method: 'GET' })
  const json = await response.json()

  return json
}

export const getAllMovies = () =>
  async (dispatch) => {
    const movies = await fetchMovies()

    movies.map(movie => dispatch(actions.add(movie)))
  }
  export const acceptMovie = (id) =>
    async (dispatch) => {
      const movies = await fetchAcceptMovie(id)

      movies.map(movie => dispatch(actions.add(movie)))
    }
