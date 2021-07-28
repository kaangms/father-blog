import React, { useState } from 'react'
import './style.scss'
const SearchSidebar = ({ className }) => {
    const [search, setSearch] = useState()
    const submitHandler = e => {
        e.preventDefault()
        console.log(search)
    }
    return (
        <form
            className={className}
            onSubmit={submitHandler}>
            <input
                placeholder="ara"
                value={search}
                // className={}
                type="text"
                onChange={event => setSearch(event.target.value)}
            />
            <button><i className="fa fa-search"></i></button>
        </form>
    )
}
export default SearchSidebar