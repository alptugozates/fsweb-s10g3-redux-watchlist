import { ADD_FAV, ADD_MOVIE, DELETE_FAV, REMOVE_MOVIE } from "../actions/favAction";
import { movies } from "../movies";
const initialState = {
    favMovies: [],
    movies: movies,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload],
            }
        case DELETE_FAV:
            return {
                ...state,
                favMovies: state.favMovies.filter((movie) => movie.id !== action.payload)
            }
        case REMOVE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }

        default:
            return state;
    }

}
export default reducer;