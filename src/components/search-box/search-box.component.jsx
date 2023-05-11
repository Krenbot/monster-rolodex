import './search-box.styles.css';

export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='Search Monsters...'
        onChange={props.onSearchChange}
    />
);

export default SearchBox