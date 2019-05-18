import React from 'react';
import style from './Title.css';

const Title = props => (
  <React.Fragment>
    <h1 className={style.title}>{props.title}</h1>
    <p className={style.paragraph}>
      Number of tasks left:
      {props.tasksLeft}
    </p>
  </React.Fragment>
);

export default Title;
