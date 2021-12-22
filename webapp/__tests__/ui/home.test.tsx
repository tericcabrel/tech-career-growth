import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/containers/home';

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Welcome to Tech Career Growth Navigator/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
