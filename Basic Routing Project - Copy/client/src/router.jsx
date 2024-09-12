import { createBrowserRouter, redirect } from "react-router-dom";
import { NewTodo } from "./pages/NewTodo";
import { TodoList } from "./pages/TodoList";

export const router = createBrowserRouter([
  {
    index: true,
    element: <TodoList />,
    loader: async ({ request }) => {
      const url = new URL(request.url); // Use `new URL` to parse the URL
      const searchParams = url.searchParams;
      const query = searchParams.get("query") || "";
      const todos = await fetch(`http://localhost:3000/todos?q=${query}`, { signal: request.signal }).then(res => res.json());
      return { searchParams: { query }, todos };
    },
  },
  {
    path: "/new",
    element: <NewTodo />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get("title");
      
      await fetch("http://localhost:3000/todos", {
        method: "POST",
        signal: request.signal,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, completed: false }),
      }).then(res => res.json());
      
      return redirect("/");
    },
  },
]);
