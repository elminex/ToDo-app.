import React from 'react';
import { CSSTransition } from 'react-transition-group';
import style from './TodoList.css';
import transitions from './transition.css';
import Todo from './Todo';

const TodoList = (props) => {
  const list = props.data;
  const hide = props.hide;
  const items = list.map(item => (
    <CSSTransition
      in={item.visible === true}
      appear
      timeout={300}
      unmountOnExit
      onExited={() => props.remove()}
      classNames={{
        appear: transitions.listAppear,
        appearActive: transitions.listAppearActive,
        appearDone: transitions.listAppearDone,
        exit: transitions.listExit,
        exitActive: transitions.listExitActive,
        exitDone: transitions.listExitDone,
      }}
      key={item.id}
    >
      <Todo id={item.id} text={item.text} hide={hide} important={item.important} />
    </CSSTransition>
  ));

  return (
    <ul className={style.taskList}>
      {items}
    </ul>
  );
};

export default TodoList;
