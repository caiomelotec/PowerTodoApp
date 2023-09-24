import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";

interface BoardState {
  board: Board;
  setBoardState: (board: Board) => void;
}

interface BoardActions {
  getBoard: () => Promise<void>;
}

export const useBoardStore = create<BoardState & BoardActions>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),
}));
