import axios from "axios";

export default {
    getCredits: (title) => {
        return axios.post("/api/credits", {title: title});
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}
