import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {toggleIsBookPage} from "./redux/reducers/books-reducer";

const AppContainer =(props)=> {
    return <App isBookPage={props.isBookPage}/>
}
let mapDispatchToProps = {
    toggleIsBookPage
}

let mapStateToProps = (state) =>{
    return {
        isBookPage: state.booksPage.isBookPage
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AppContainer)