import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newTask: '',
    };
  }

  changeHandle(e) {
    const text = e.target.value;
    this.setState({ newTask: text });
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.state.newTask;
    this.props.add(text);
    this.setState({ newTask: '' });
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.label} htmlFor="task">
          Enter new task:
          <input onChange={this.changeHandle} id="task" type="text" required value={this.state.newTask} />
        </label>
        <button type="submit">Add task</button>
      </form>
    );
  }
}
export default TodoForm;
