const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Luna', name),
    React.createElement('h1', {}, 'Dog', animal),
    React.createElement('h1', {}, 'Hanvanese', breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
