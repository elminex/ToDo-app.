import React from 'react';
import uuid from 'uuid';
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Todo from '../components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      modalOpen: false,
    };
  }

  showModal(id) {
    const modalContent = this.state.data.filter(item => item.id === id);
    const modal = modalContent.pop();
    this.setState({ modalOpen: modal });
  }

  closeModal() {
    this.setState({ modalOpen: false });
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
        <Title title="Todo List" tasksLeft={this.state.data.length} />
        <TodoForm add={this.addTodo} />
        <TodoList data={this.state.data} remove={this.removeTodo.bind(this)} show={this.showModal.bind(this)} />
        <Todo open={this.state.modalOpen} close={this.closeModal} remove={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default hot(module)(App);
