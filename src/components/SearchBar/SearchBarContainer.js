import React from "react";
import {connect} from "react-redux";
import {
    requestBooksThunk, setCategory, setClearBooks, setPage,
    setSearch,
    setSorting,

} from "../../redux/reducers/books-reducer";
import SearchBar from "./SearchBar";

const SearchBarContainer = (props) => {
    return <>
        <SearchBar search={props.search} category={props.category} sorting={props.sorting}
                   setSearch={props.setSearch} setCategory={props.setCategory}
                   setSorting={props.setSorting} requestBooksThunk={props.requestBooksThunk}
                   setClearBooks={props.setClearBooks} page={props.page} setPage={props.setPage}
        />
    </>
}

let mapStateToProps = (state) => ({
    search: state.booksPage.search,
    category: state.booksPage.category,
    sorting: state.booksPage.sorting,
    page: state.booksPage.page
})

let mapDispatchToProps = {
    requestBooksThunk,
    setSearch,
    setCategory,
    setSorting,
    setClearBooks,
    setPage

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)