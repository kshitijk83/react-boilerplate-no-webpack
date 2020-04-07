import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet';

import SearchParams from '../SearchParams';

afterEach(cleanup);

test('should SearchParams', async () => {
  const { getByTestId, container, getByText } = render(<SearchParams />);

  const animalDropdown = getByTestId('use-dropdown-animal');
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

  expect(pet.breeds).toHaveBeenCalled();
  const breedDropdown = getByTestId('use-dropdown-breed');
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);

  const searchResults = getByTestId('search-results');
  expect(searchResults.textContent).toEqual('No Pets Found');
  fireEvent(getByText('Submit'), new MouseEvent('click'));
  expect(pet.animals).toHaveBeenCalled();
  setTimeout(() => {
    expect(searchResults.children.length).toEqual(_dogs.length);
  }, 500);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="search-params"
    >
      <h1>
        Seattle, WA
      </h1>
      <form>
        <label
          for="loction"
        >
          <input
            id="location"
            placeholder="Location"
            value="Seattle, WA"
          />
        </label>
        <label
          for="use-dropdown-animal"
        >
          Animal
          <select
            data-testid="use-dropdown-animal"
            id="use-dropdown-animal"
          >
            <option>
              All
            </option>
            <option
              value="dog"
            >
              dog
            </option>
            <option
              value="cat"
            >
              cat
            </option>
            <option
              value="bird"
            >
              bird
            </option>
          </select>
        </label>
        <label
          for="use-dropdown-breed"
        >
          Breed
          <select
            data-testid="use-dropdown-breed"
            id="use-dropdown-breed"
          >
            <option>
              All
            </option>
            <option
              value="Bichom Frisw"
            >
              Bichom Frisw
            </option>
            <option
              value="Bolognese"
            >
              Bolognese
            </option>
            <option
              value="Coton de Tulear"
            >
              Coton de Tulear
            </option>
            <option
              value="Havanese"
            >
              Havanese
            </option>
            <option
              value="Maltese"
            >
              Maltese
            </option>
          </select>
        </label>
        <label
          for="theme"
        >
          Theme
          <select
            id="theme"
          >
            <option
              value="peru"
            >
              Peru
            </option>
            <option
              value="darkblue"
            >
              Dark Blue
            </option>
            <option
              value="orange"
            >
              Orange
            </option>
          </select>
        </label>
        <button
          style="background-color: green;"
        >
          Submit
        </button>
      </form>
      <div
        class="search"
        data-testid="search-results"
      >
        <h1>
          No Pets Found
        </h1>
      </div>
    </div>
  `);
});
