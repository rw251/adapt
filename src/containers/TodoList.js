import React from 'react';

import './TodoList.css';

class TodoItem extends React.Component {
  render() { 
    return (
      <li className={this.props.todo.completed ? 'completed' : ''}>
        <div className="view">
          <span>
            <a href="#" onClick={this.props.onWhy}>why?</a>
          </span>
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label>
            {this.props.todo.title}
          </label>
        </div>
        <div className={this.props.todo.showReason ? "more-detail shown" : "more-detail"}>
          {this.props.todo.reason}
        </div>
      </li>
    )
  }
}

class TodoList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: props.todoItems
    }
  }

  render() {
    let todoItems = this.state.items.map(function (todo) {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onWhy={()=>{
            this.setState({items: this.state.items.map(item => {
              if(item.id === todo.id) {
                item.showReason = !item.showReason;
              }
              return item;
            })});
          }}
          onToggle={()=>{
            this.setState({items: this.state.items.map(item => {
              if(item.id === todo.id) {
                item.completed = !item.completed;
              }
              return item;
            })});
          }}
        />
      );
    }, this);
    return (
      <div className="TodoList">
        <header className="header">
          <h2>Important things to do now</h2>
        </header>
        <section className="main">
          <ul className="todo-list">
            {todoItems}
          </ul>
        </section>
      </div>
    );
  }
}

export default TodoList;