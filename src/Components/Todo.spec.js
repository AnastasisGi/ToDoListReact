import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './ToDo';



test('when todo checkbox is checked then text has a strikethrough ', () => {
    render(<Todo text={"My first todo!!"}/>)
    userEvent.click(screen.getByRole('checkbox'))
    const todoElement = screen.getByText("My first todo!!")
    expect(todoElement).toHaveStyle("text-decoration: line-through")

})
