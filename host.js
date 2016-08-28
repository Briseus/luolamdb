if (process.env.NODE_ENV === 'production') {
    var url = "https://luolamdb.herokuapp.com/api/movies"
} else {
    var url = "localhost:3000/api/movies"
}

export const host = url