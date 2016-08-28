
export const searchResults = (results) => {
    return {
        type: 'GET_SEARCH_RESULTS',
        results: results
    }
}

export const clearResults = () => {
  return {
    type: 'CLEAR_SEARCH_RESULTS'
  }
}



export function searchMovies(dispatch, url) {

    return function (dispatch, getState) {

        let state = getState()

        return fetch(url)
            .then((response)=> {
              if(response.ok) {
                return response.json()
              }
              throw Error('Movie not found')
            })
            .then((data) => {
            let newData = []
              if (data.response === "False") {
                return newData
              }
              newData = data.Search
              console.log(newData)
              return dispatch(searchResults(newData))
            })
            .catch((err) => {
              console.error(url, status, err.toString());
            })
    }

}