import react, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import { render } from '@testing-library/react';

// Use class-based components to work with states
class App extends Component {
  // Add states with constructors
  constructor()
  {
    // MUST add super() method to make constructor() method work
    super()
    // Use States in robofriends app
    // States allow for change in props
    // State makes the App component smart
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  // componentDidMount() to check component mounted already
  // it runs before render() and after new call of render()
  // Every time the event changes, the render() function is callled
  componentDidMount()
  {
    // Make HTTP to API that gives info about robots
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  // Make up onSearchChange function
  // This is for the searchBox
  onSearchChange = (event) =>
  {
    // write this.setState to update state
    this.setState({ searchfield: event.target.value });

  }

  render()
  { 
    // Destructure robots and searchfield
    const {robots, searchfield} = this.state;

    // filter robots
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length)
    {
      return <h1>Loading</h1>
    }

    else
    {
       // Pass filtered robots to search Box
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }

}

export default App;
