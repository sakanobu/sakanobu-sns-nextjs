import React from 'react';
import { Home } from 'pages/index';
import { render, fireEvent, screen } from 'test/testUtils';

describe('home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicking button triggers alert', () => {
    render(<Home />, {});
    jest.spyOn(window, 'alert').mockImplementation();
    fireEvent.click(screen.getByText('Test Button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });
});
