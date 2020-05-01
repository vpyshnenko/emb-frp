import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Led from './Led';
import './style.css';
import { of } from 'rxjs';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const led1$ = interval(1000).pipe(map(v => {
  console.log('V ', v)
  return v%2
}),take(4))

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Led state$={led1$}/>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
