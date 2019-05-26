import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
  const list = props.data;
  const remove = props.remove;
  const show = props.show;
  const items = list.map((item, index) => (
    <li className={style.taskItem} id={item.id} key={item.id} >
      <button onClick={() => show(item.id)}> {index + 1}. {item.text}</button>
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
