import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  constructor() {
    super();
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle() {
    this.props.hide(this.props.id);
  }

  render() {
    return (
      <li className={style.listItem}>
        <button className={`${style.listContent} ${this.props.important ? style.important : style.normal}`}
        onClick={this.clickHandle}>{this.props.text}</button>
      </li>
    );
  }
}
export default Todo;
