import React from 'react';

function Code({
  lang,
  children
}) {
  return (
    <pre className={`Code Code--lang-${lang}`}>
      <code>
        {children}
      </code>
    </pre>
  );
}

Code.defaultProps = { lang: 'js' };

export default Code
