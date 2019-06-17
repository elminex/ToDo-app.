import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandle = this.changeHandle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkboxHandle = this.checkboxHandle.bind(this);
    this.state = {
      newTask: '',
      important: false,
    };
  }

  changeHandle(e) {
    const text = e.target.value;
    this.setState({ newTask: text });
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.state.newTask;
    const checkbox = this.state.important;
    this.props.add(text, checkbox);
    this.setState({ newTask: '', important: false });
  }

  checkboxHandle() {
    this.setState({ important: !this.state.important });
  }

  render() {
    return (
      <div className={style.leftContainer}>
        <p className={style.paragraph}>
          Number of tasks left: {this.props.tasksLeft}
        </p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor="task">
            Enter new task:
            <input onChange={this.changeHandle} id="task" type="text" required value={this.state.newTask} />
          </label>
          <label htmlFor="important">
            Important!!
            <input id="important" type="checkbox" onChange={this.checkboxHandle} checked={this.state.important} />
          </label>

          <button className={style.btn} type="submit">Add task</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
