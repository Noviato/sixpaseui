import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../lib/Button';
import { Input } from '../lib/Input';

const App = () => (
  <div>
    <h1>Sixpase UI</h1>
    <h2>Button</h2>
    <p>Here's an example of button.</p>
    <Button text="Click me!" />
    <Input />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));