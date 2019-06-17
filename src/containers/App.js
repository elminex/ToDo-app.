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
    this.hideTodo = this.hideTodo.bind(this);
    this.state = {
      data: [{
        id: 1,
        text: 'clean room',
        visible: true,
        important: true,
      }, {
        id: 2,
        text: 'wash the dishes',
        visible: true,
        important: false,
      }, {
        id: 3,
        text: 'feed my cat',
        visible: true,
        important: true,
      }],
    };
  }

  addTodo(val, checkbox) {
    const todo = {
      text: val,
      id: uuid.v4(),
      visible: true,
      important: checkbox,
    };
    console.log(todo);
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo() {
    const newData = this.state.data.filter(todo => todo.visible === true);
    this.setState({ data: newData });
  }

  hideTodo(id) {
    const newData = this.state.data;
    newData.forEach((todo) => {
      if (todo.id === id) {
        todo.visible = false;
      }
    });
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="Todo List" />
        <div className={style.TodoContainer}>
          <TodoForm add={this.addTodo} tasksLeft={this.state.data.length} />
          <TodoList data={this.state.data} hide={this.hideTodo} remove={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
