export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const addFav = (movie) => {
    return ({ type: ADD_FAV, payload: movie });
};

export const deleteFav = (id) => {
    return ({ type: DELETE_FAV, payload: id });
};

export const removeMovie = (id) => {
    return ({ type: REMOVE_MOVIE, payload: id });
}

export const addMovie = (id) => {
    return ({ type: ADD_MOVIE, payload: id });
}



