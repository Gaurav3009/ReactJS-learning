import React from 'react';
import '../search-box/search-box.styles.css';
export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
        className = 'search' 
        type="search" 
        placeholder= {placeholder} 
        onChange={handleChange}/>
        // e => this.setState({searchField : e.target.value}, () => console.log(this.state))
        /*using call back inside the this.setState will make it as Synchronous*/
    )
}