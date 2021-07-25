import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';

test('renders with a heading', () => {
  render(<ToDoList />);
  const linkElement = screen.getByText("A react to do List");
  expect(linkElement).toBeInTheDocument();
});
