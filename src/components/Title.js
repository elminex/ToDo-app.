import React from 'react';

const Title = props => (
  <React.Fragment>
    <h1>{props.title}</h1>
    <p>
      Number of tasks left:
        {props.tasksLeft}
    </p>
  </React.Fragment>
);

export default Title;
