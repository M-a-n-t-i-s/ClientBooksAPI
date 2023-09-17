import React from 'react'
import s from './Book.module.css'

const Book = (props) => {

    return props.books.map((item, index) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;

        if (thumbnail !== undefined) {
            return (

                <div className={s.book} key={index}   onClick={()=>{props.toggleIsBookPage(true); props.setBook(item) }}>
                    <img src={thumbnail} alt="Book"/>
                    <div className={s.info}>
                        <label className={s.category}>{item.volumeInfo.categories}</label>
                        <label className={s.mainTitle}>{item.volumeInfo.title}</label>
                        <label className={s.author}>{item.volumeInfo.authors}</label>
                    </div>

                </div>


            )
        }

    })

}

export default Book