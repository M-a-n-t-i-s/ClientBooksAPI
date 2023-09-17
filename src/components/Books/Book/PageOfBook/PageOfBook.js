import React from "react";
import s from "./PageOfBook.module.css"

const PageOfBook = (props)=> {
    console.log(props.book)
    console.log(props.book.volumeInfo.description)
    let thumbnail = props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.thumbnail;
    if (thumbnail !== undefined) {
        return <>
            <div className={s.form}>
                    <div className={s.bookImg}>
                        <img src={thumbnail} alt="book"/>
                    </div>
                    <div className={s.info}>
                        <label className={s.category}>{props.book.volumeInfo.categories}</label>
                        <label className={s.mainTitle}>{props.book.volumeInfo.title}</label>
                        <label className={s.author}>{props.book.volumeInfo.authors.map(e=>"_"+e+"_")}</label>
                        <label className={s.subtitle}>{props.book.volumeInfo.description || "No description"}</label>
                        <button  onClick={() => props.toggleIsBookPage(false)}>Back</button>
                    </div>
            </div>
        </>
    }
}

export default PageOfBook