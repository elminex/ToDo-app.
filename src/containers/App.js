import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      data: [{
        id: 1,
        text: 'clean room',
      }, {
        id: 2,
        text: 'wash the dishes',
      }, {
        id: 3,
        text: 'feed my cat',
      }],
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="Todo List" />
        <div className={style.TodoContainer}>
          <TodoForm add={this.addTodo} tasksLeft={this.state.data.length} />
          <TodoList data={this.state.data} remove={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
