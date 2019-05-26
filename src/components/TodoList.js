import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
  const list = props.data;
  const remove = props.remove;
  const items = list.map(item => (
    <Todo id={item.id} text={item.text} key={item.id} remove={remove} />
  ));

  return (
    <ul className={style.taskList}>
      {items}
    </ul>
  );
};

export default TodoList;
