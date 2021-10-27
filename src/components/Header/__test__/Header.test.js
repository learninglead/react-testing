import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('should render same title text passed in props', async () => {
    render(<Header title='My Header' />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it('should check that html tag is header or not', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByRole('heading');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should check that html tag is header or not', async () => {
//   render(<Header title='hi' />);
//   const headingElement = screen.getByTitle('Header', { name: 'Hello' });
//   expect(headingElement).toBeInTheDocument();
// });

// it('should check head element id', async () => {
//   render(<Header title='hi' />);
//   const headingElement = screen.getByTestId('header-1', { name: 'Hello' });
//   expect(headingElement).toBeInTheDocument();
// });

// //FIND BY

// it('should check header exist or not using findBy', async () => {
//   render(<Header title='hi' />);
//   const headingElement = await screen.findByText(/hi/i);
//   expect(headingElement).toBeInTheDocument();
// });

// //Query By

// it('should check header exist or not using findBy', async () => {
//   render(<Header title='Hello' />);
//   const headingElement = screen.queryByText(/hi/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// // Get all

// it('should check header exist or not using findBy', async () => {
//   render(<Header title='Hello' />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });
