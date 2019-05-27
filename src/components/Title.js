import React from 'react';
import style from './Title.css';

const Title = props => (
  <>
    <h1 className={style.title}>{props.title}</h1>
    <p className={style.paragraph}>
      Number of tasks left:
      {props.tasksLeft}
    </p>
  </>
);

export default Title;
