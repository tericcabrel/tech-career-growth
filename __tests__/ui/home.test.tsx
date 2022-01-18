import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/containers/home';

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Find the right resource to/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
