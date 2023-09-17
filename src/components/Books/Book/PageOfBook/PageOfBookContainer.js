import React from "react";
import PageOfBook from "./PageOfBook";
import {connect} from "react-redux";
import {toggleIsBookPage} from "../../../../redux/reducers/books-reducer";


const PageOfBookContainer = (props) => {
    return <PageOfBook  book = {props.book} toggleIsBookPage={props.toggleIsBookPage}/>
}

let mapDispatchToProps = {
    toggleIsBookPage
}

let mapStateToProps = (state) => {
    return {
        book: state.booksPage.book
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PageOfBookContainer)