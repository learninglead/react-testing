import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
  tasks.map((task) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should todo component', () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(inputElement, { target: { value: 'test' } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/test/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render multiple todos', () => {
    render(<MockTodo />);
    addTasks(['Task', 'Added', 'Removed']);
    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('should not have completed class initially rendered', () => {
    render(<MockTodo />);
    addTasks(['TaskGet']);
    const divElement = screen.getByText(/TaskGet/i);
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('should  have completed class clicked', () => {
    render(<MockTodo />);
    addTasks(['TaskGet']);
    const divElement = screen.getByText(/TaskGet/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
