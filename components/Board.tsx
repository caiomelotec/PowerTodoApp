"use client";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export const Board = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* Rendering all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
};
