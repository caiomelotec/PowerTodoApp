import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  try {
    const data = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );

    const todos = data.documents;

    // Initialize columns Map with all possible column types
    const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];
    const columns = new Map<TypedColumn, Column>(
      columnTypes.map((columnType) => [
        columnType,
        {
          id: columnType,
          todos: [],
        },
      ])
    );

    // Group todos by status and populate columns
    todos.forEach((todo) => {
      if (columns.has(todo.status)) {
        const column = columns.get(todo.status)!;

        column.todos.push({
          $id: todo.$id,
          $createdAt: todo.$createdAt,
          title: todo.title,
          status: todo.status,
          ...(todo.image && { image: JSON.parse(todo.image) }),
        });
      }
    });

    // Sort columns by columnTypes
    const sortedColumns = new Map(
      Array.from(columns.entries()).sort(
        (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
      )
    );

    const board: Board = {
      columns: sortedColumns,
    };

    return board;
  } catch (error) {
    // Handle errors here, e.g., log the error or return an error object
    console.error("Error fetching and processing data:", error);
    throw error;
  }
};
