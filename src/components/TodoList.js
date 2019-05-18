import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
  const list = props.data;
  const remove = props.remove;
  const items = list.map(item => (
    <li className={style.taskItem} id={item.id} key={item.id}>
      {item.text}
      <button onClick={() => remove(item.id)}>&times;</button>
    </li>
  ));

  return (
    <ul className={style.taskList}>
      {items}
    </ul>
  );
};

export default TodoList;
