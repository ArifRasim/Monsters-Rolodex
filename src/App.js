import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search-component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }
  handleChange=(e)=>{
    this.setState({ searchField:e.target.value})
  }
  render() {
    const {monsters,searchField}=this.state
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (

      <div className="App">
      <h1>Monster Rolodex</h1>
        <Search placeholder="Search monsters" handleChange={this.handleChange}></Search>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
