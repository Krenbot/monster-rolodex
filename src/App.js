import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
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

  render() {
    console.log('render')
    return <div className="App">


      <input className='search-box' type='search' placeholder='Search Monsters...' />

      {this.state.monsters.map((monster) => {
        return <div key={monster.id}>
          <h1>{monster.name}</h1>
        </div>;
      },
        () => {
          console.log(this.state)
        }
      )}




    </div>;
  };
}

export default App;