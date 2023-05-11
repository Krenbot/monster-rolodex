import { useEffect, useState } from 'react';
// import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users)
      );
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase()
    setSearchField(searchFieldString)
  };

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App" >
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search monsters...'
      />

      <CardList monsters={filteredMonsters} />
    </div >
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   };

// componentDidMount() {
//   //componentDidMount: Used when a class component needs to leverage some kind of API call to get data it needs to display appropriate UI
//   console.log('componentDidMount')

// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLowerCase()
//   this.setState(() => {
//     return { searchField };
//   });
// };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     return (
//       // <div className="App" >
//       //   <h1 className='app-title'>Monsters Rolodex</h1>
//       //   <SearchBox
//       //     className='search-box'
//       //     onChangeHandler={onSearchChange} placeholder='Search monsters...'
//       //   />

//       //   <CardList monsters={filteredMonsters} />
//       // </div >
//     );
//   }
// }
export default App;