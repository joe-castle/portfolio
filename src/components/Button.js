// TODO: Make actual button/input element?

import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <a
      {...props}
      className={classNames({
        Button: true,
        [`Button--${props.color}`]: props.color,
        [props.className]: props.className,
      })}
    >
      {props.children}
    </a>
  );
}

export default Button;
