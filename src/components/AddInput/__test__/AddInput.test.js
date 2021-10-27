import { screen, render, fireEvent } from '@testing-library/react';

import AddInput from '../AddInput';

const mockedSetTodos = jest.fn();

describe('AddInput', () => {
  it('should render input element', async () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type in input element', async () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shop' } });
    expect(inputElement.value).toBe('Go Grocery Shop');
  });

  it('should be empty when button is clicked', async () => {
    render(<AddInput setTodos={mockedSetTodos} todos={[]} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(inputElement, { target: { value: 'Go Grocery Shop' } });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe('');
  });
});
