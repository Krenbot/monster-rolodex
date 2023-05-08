import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  };

  componentDidMount() {
    //componentDidMount: Used when a class component needs to leverage some kind of API call to get data it needs to display appropriate UI
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) =>
        this.setState(
          //Makes sure component updates
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );


    return (
      <div className="App" >
        <SearchBox onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}
export default App;