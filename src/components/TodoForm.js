import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="task">
          Enter new task:
          <input onChange={this.changeHandle.bind(this)} id="task" type="text" required="true" />
        </label>
        <button type="submit">Add task</button>
      </form>
    );
  }
}
export default TodoForm;
