import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Pepper',
      breed: 'Havanese',
    }),
    React.createElement(Pet, { name: 'Luna', animal: 'Bird', breed: 'Blah' }),
    React.createElement(Pet, { name: 'Luna', animal: 'Cow', breed: 'Dede' }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
