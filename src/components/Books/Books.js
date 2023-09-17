import React from 'react'
import s from './Books.module.css'
import Book from "./Book/Book";

const Books = (props) => {
    return (
        <div className={s.frame}>
            <div className={s.header}>
                <label>Found results {props.countBooks || 0}</label>
            </div>
            <div className={s.books}>
                <Book books={props.books} toggleIsBookPage={props.toggleIsBookPage} setBook={props.setBook}/>
            </div>

            {props.countBooks != 0 ?
                <input className={s.footer} type={'button'} value={'Load more'} onClick={() => {
                    props.getBooks(props.search, props.category, props.sorting, props.page + 30)
                    props.setPage(props.page + 30)

                }}
                /> : <></>
            }

        </div>
    )
}

export default Books