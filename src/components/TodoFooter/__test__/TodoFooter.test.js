import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TodoFooter from '../TodoFooter';

const MockFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render incomplete tasks correctly', () => {
    render(<MockFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number tasks is one', () => {
    render(<MockFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

// it('should render "task" when the number tasks is one', () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeTruthy();
// });

// it('should render "task" when the number tasks is one', () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeVisible();
// });

// it('should render "task" when the number tasks is one', () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML('p');
// });

// it('should render "task" when the number tasks is one', () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId('para');
//   expect(paragraphElement).toHaveTextContent('1 task left');
// });

// it('should render "task" when the number tasks is one', () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />);
//   const paragraphElement = screen.getByTestId('para');
//   expect(paragraphElement.textContent).toBe('1 task left');
// });
