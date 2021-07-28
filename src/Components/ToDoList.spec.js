import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoList from './ToDoList';



test('renders with a heading', () => {
  render(<ToDoList />);
  const linkElement = screen.getByText("A react to do List");
  expect(linkElement).toBeInTheDocument();
});


test('saves and show a todo', () => {
  render(<ToDoList />);
  userEvent.type(screen.getByRole('textbox'), "My todo number 1")
  userEvent.click(screen.getByRole('button'))
  const todoElement = screen.getByText("My todo number 1");
  expect(todoElement).toBeInTheDocument();
});


test('clears all the todos', () => {
  render(<ToDoList />);
  userEvent.type(screen.getByRole('textbox'), "My todo number 1")
  userEvent.click(screen.getByRole('button'))
  const todoElement = screen.getByText("My todo number 1");
  expect(todoElement).toBeInTheDocument();
  userEvent.click(screen.getByRole('link'))
  expect(todoElement).not.toBeInTheDocument();

});
