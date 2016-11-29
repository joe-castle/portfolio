import React from 'react';
import classNames from 'classnames';

function Button(props) {
  return (
    <button
      {...props}
      className={classNames({
        Button: true,
        'Button--active': props.active,
        [`Button--${props.color}`]: props.color,
        [`Button--all-${props.color}`]: props.all,
        [props.className]: props.className,
      })}

    >
      {props.children}
    </button>
  );
}

export default Button;
