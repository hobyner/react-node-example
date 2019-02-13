import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li key={item.key}>{item.text}
              <a onClick={() => this.delete(item.key)}>X</a>
            </li>
  }

  delete(key) {
    console.log("Key is: " + key);
    this.props.delete(key);
  }

  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);
    const toDoItems = [
      {
        id: 1,
        description: "Eat",
        id: 2,
        description: "Pray",
        id: 3,
        description: "Run",
        id: 4,
        description: "Dance",
        id: 5,
        description: "Skype"
      }
    ]

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
}

export default TodoItems;
