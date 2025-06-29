// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DroppedBlocksProvider } from "./components/DroppedBlocksContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <DroppedBlocksProvider>
        <div className="flex h-screen w-screen">
          <Sidebar />
          <MidArea />       {/* flex-grow container */}
          <PreviewArea />   {/* fixed width */}
        </div>
      </DroppedBlocksProvider>
    </DndProvider>
  );
}
