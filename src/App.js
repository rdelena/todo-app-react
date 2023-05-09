import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: true,
      inputValue: "",
      todoList: [],
    };
  }

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  handleDelete = (index) => {
    this.setState({
      todoList: this.state.todoList.filter((todo, i) => i !== index),
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Click Me</button>
          <p>{this.state.isClicked ? "true" : "false"}</p>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>

          <ol>
            {this.state.todoList.map((todo, index) => {
              return (
                <li key={index}>
                  {todo}
                  <button onClick={() => this.handleDelete(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
