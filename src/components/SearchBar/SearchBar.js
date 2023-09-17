import React from 'react'
import s from './SearchBar.module.css'



const SearchBar =(props) => {


    const pushButtonFind =(e)=>{
        props.setClearBooks([])
        props.setPage(0)
        props.requestBooksThunk(props.search, props.category, props.sorting, props.page)
        e.preventDefault()
    }
    return (
        <div className={s.frame}>
            <form className={s.findWindow}>
                <div>
                    <h1>Search for books</h1>

                    <div className={s.search}>
                        <input id="findButton" onKeyUp={event => {if (event.key==='Enter') {
                            pushButtonFind(event)
                        }}} type={'text'} onChange={e => props.setSearch(e.target.value)}/>
                        <button type="submit" className={s.imageButton} onClick={pushButtonFind}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>


            <div>
                <label>Categories</label>
                <select onChange={e=>props.setCategory(e.target.value)}>
                    <option>all</option>
                    <option>art</option>
                    <option>biography</option>
                    <option>computers</option>
                    <option>history</option>
                    <option>medical</option>
                    <option>poetry</option>
                </select>
                <label>Sorting by</label>
                <select onChange={e=>props.setSorting(e.target.value)}>
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar