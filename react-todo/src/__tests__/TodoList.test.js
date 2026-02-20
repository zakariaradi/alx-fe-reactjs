import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText("Learn React")).toBeInTheDocument();
    expect(getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);

    fireEvent.change(getByPlaceholderText("Add todo"), {
      target: { value: "New Todo" },
    });

    fireEvent.click(getByText("Add"));

    expect(getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    const { getByText } = render(<TodoList />);

    const todo = getByText("Learn React");
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    const { getAllByText, queryByText } = render(<TodoList />);

    fireEvent.click(getAllByText("Delete")[0]);

    expect(queryByText("Learn React")).not.toBeInTheDocument();
  });
});
