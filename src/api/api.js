import axios from "axios";

const API_KEY ='AIzaSyD5iXnozpJOnsdHMVQk1OmxUPT95R5OeR0'

const instance = axios.create({})

export const booksAPI = {
    getBooks(search, category, sorting, startIndex) {
        let code
        if (category==="all") {
            code=``
        } else {
            code =`+subject:${category}`
        }
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${search}${code}&key=${API_KEY}&maxResults=30&orderBy=${sorting}&startIndex=${startIndex}`)
        return instance.get(`https://www.googleapis.com/books/v1/volumes?q=${search}${code}&key=${API_KEY}&maxResults=30&orderBy=${sorting}&startIndex=${startIndex}`)
            .then(res=> res.data)
            .catch(err=>console.log(err))
    }
}
