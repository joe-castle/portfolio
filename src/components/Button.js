import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      {...props}
      className={classNames({
        Button: true,
        [`Button--${props.color}`]: props.color,
        [props.className]: props.className,
      })}

    >
      {props.children}
    </button>
  );
}

export default Button;
