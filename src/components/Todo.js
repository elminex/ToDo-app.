import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  clickHandle() {
    this.props.remove(this.props.id)
  }
  render() {
    return (
      <li className={style.listItem}>
        <button className={style.listContent} onClick={this.clickHandle.bind(this)}>{this.props.text}</button>
      </li>
    )
  }
}
export default Todo;
