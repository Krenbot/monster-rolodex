import './search-box.styles.css';

export const SearchBox = props => (
    <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={props.onSearchChange}
    />
);

export default SearchBox