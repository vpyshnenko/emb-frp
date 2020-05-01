import React, { useState, useEffect } from 'react';
import classNames from 'classnames'

export default ({ color, state$ }) => {
  const [state, setState] = useState(false);
  useEffect(
  () => {
    const subscription = state$.subscribe(setState);
    return () => {
      subscription.unsubscribe();
    };
  },
  [state$],
);
  return (<div className={classNames('led', state ? "led-on" : "led-off")}>
  </div>
)
}
