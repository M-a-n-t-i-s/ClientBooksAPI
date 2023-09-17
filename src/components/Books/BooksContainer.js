import React from "react"
import {requestBooksThunk, setBook, setPage, toggleIsBookPage} from "../../redux/reducers/books-reducer";
import Books from "./Books";
import {connect} from "react-redux"
import Preloader from "../common/Preloader/Preloader";


const BooksContainer = (props) => {
    return <>
        {props.isFetching ? <Preloader/> : null}
        <Books books={props.books} getBooks={props.getBooks} search={props.search} setPage={props.setPage}
               category={props.category} sorting={props.sorting} page={props.page} countBooks={props.countBooks}
        toggleIsBookPage={props.toggleIsBookPage} setBook={props.setBook}/>
    </>
}

let mapDispatchToProps = {
    getBooks: requestBooksThunk,
    setPage,
    toggleIsBookPage,
    setBook
}

let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        countBooks: state.booksPage.countBooks,
        search: state.booksPage.search,
        category: state.booksPage.category,
        sorting: state.booksPage.sorting,
        page: state.booksPage.page,
        isFetching: state.booksPage.isFetching
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)