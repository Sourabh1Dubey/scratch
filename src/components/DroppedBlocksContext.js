import React, { createContext, useContext, useState } from "react";

const DroppedBlocksContext = createContext();

export function DroppedBlocksProvider({ children }) {
  const [blocks1, setBlocks1] = useState([]);
  const [blocks2, setBlocks2] = useState([]);

  return (
    <DroppedBlocksContext.Provider value={{ blocks1, setBlocks1, blocks2, setBlocks2 }}>
      {children}
    </DroppedBlocksContext.Provider>
  );
}

export function useDroppedBlocks() {
  return useContext(DroppedBlocksContext);
}
