import {booksAPI} from "../../api/api";

const GET_BOOKS = 'GET_BOOKS'
const SET_PAGE = 'SET_PAGE'
const SET_CATEGORY = 'SET_CATEGORY'
const SET_SORTING = 'SET_SORTING'
const SET_SEARCH = 'SET_SEARCH'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_COUNT_BOOKS = 'SET_COUNT_BOOKS'
const ClEAR_BOOKS = 'ClEAR_BOOKS'
const TOGGLE_IS_BOOK_PAGE = 'TOGGLE_IS_BOOK_PAGE'
const SET_BOOK = 'SET_BOOK'

let initialState = {
    books: [],
    page: 0,
    search: '',
    category: 'all',
    sorting: 'relevance',
    countBooks: 0,
    isFetching: false,
    isBookPage: false,
    book: []

}

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: [...state.books, ...action.books]
            }
        case ClEAR_BOOKS:
            return {
                ...state,
                books: []
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            }
        case SET_BOOK:
            return {
                ...state,
                book: structuredClone(action.book)
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case SET_SORTING:
            return {
                ...state,
                sorting: action.sorting
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case SET_COUNT_BOOKS:
            return {
                ...state,
                countBooks: action.countBooks
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_BOOK_PAGE: {
            return {...state, isBookPage: action.isBookPage}
        }

        default:
            return state

    }
}

export const getBooksAC = (books) => ({type: GET_BOOKS, books})
export const setPageAC = (page) => ({type: SET_PAGE, page})
export const setCategoryAC = (category) => ({type: SET_CATEGORY, category})
export const setSortingAC = (sorting) => ({type: SET_SORTING, sorting})
export const setSearchAC = (search) => ({type: SET_SEARCH, search})
export const setBookAC = (book) => ({type: SET_BOOK, book})
export const setCountBooksAC = (countBooks) => ({type: SET_COUNT_BOOKS, countBooks})
export const setClearBooksAC = (books) => ({type: ClEAR_BOOKS, books})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsBookPageAC = (isBookPage) => ({type: TOGGLE_IS_BOOK_PAGE, isBookPage})

export const requestBooksThunk = (search, category, sorting, startIndex) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(toggleIsBookPageAC(false))
        let data = await booksAPI.getBooks(search, category, sorting, startIndex)
        dispatch(toggleIsFetching(false));
        dispatch(setCountBooksAC(data.totalItems ))
        dispatch(getBooksAC(data.items))
    }
}

export const setPage = (page) => {
    return (dispatch) => {
        dispatch(setPageAC(page))
    }
}
export const toggleIsBookPage = (bool) => {
    return (dispatch) => {
        dispatch(toggleIsBookPageAC(bool))
    }
}

export const setSearch = (search) => {
    return (dispatch) => {
        dispatch(setSearchAC(search))
    }
}
export const setBook = (book) => {
    return (dispatch) => {
        dispatch(setBookAC(book))
    }

}
export const setCategory = (category) => {
    return (dispatch) => {
        dispatch(setCategoryAC(category))
    }

}
export const setSorting = (sorting) => {
    return (dispatch) => {
        dispatch(setSortingAC(sorting))
    }
}
export const setClearBooks = (books) => {
    return (dispatch) => {
        dispatch(setClearBooksAC(books))
    }
}


export default booksReducer;