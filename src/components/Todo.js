import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  removeHandle() {
    this.props.close();
    this.props.remove(this.props.open.id);
  }

  render() {
    let content;
    if (this.props.open !== false) {
      content = (
        <div className={style.modal}>
          <div className={style.content}>
            <button className={style.close} onClick={this.props.close}>close</button>
            I need to:
            <p>{this.props.open.text}</p>
            <button className={style.remove} onClick={this.removeHandle.bind(this)}>Remove</button>
          </div>
        </div>
      );
    } else {
      content = null;
    }
    return content;
  }
}
export default Todo;
