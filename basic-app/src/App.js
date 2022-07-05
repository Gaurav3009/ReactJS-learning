import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters : [],
      searchField : ''
    };
    this.handleChange = this.handleChange.bind(this); // setting the context of handleChange
    // either do this or just use the arrow function on line number 21
  }
  // once the component is rendered
  componentDidMount() {
    // fetch returns a promise API call
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters : users}))
  }

  handleChange (e) {
    this.setState({searchField : e.target.value}, console.log(e.target.value))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 id="title">Monsters Rolodex</h1>
        <SearchBox 
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App;
