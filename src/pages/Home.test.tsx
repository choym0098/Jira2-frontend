import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import {Home} from './Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home component', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders projects', () => {
    render(<Home userId='user1'></Home>);

    expect(screen.getByTestId('id1')).toHaveTextContent('project1');
    expect(screen.getByTestId('id1')).toHaveTextContent('description1');
    expect(screen.getByTestId('id2')).toHaveTextContent('project2');
    expect(screen.getByTestId('id2')).toHaveTextContent('description2');
  });
});
