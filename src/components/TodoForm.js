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
      <div className={style.leftContainer}>
        <p className={style.paragraph}>
          Number of tasks left:
          {this.props.tasksLeft}
        </p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor="task">
            Enter new task:
          <input onChange={this.changeHandle} id="task" type="text" required value={this.state.newTask} />
          </label>
          <button className={style.btn} type="submit">Add task</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
