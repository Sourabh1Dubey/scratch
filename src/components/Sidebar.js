import React from "react";
import DraggableBlock from "./DraggableBlock";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      {/* Events */}
      <div className="font-bold text-gray-700 mb-1">Events</div>
      <DraggableBlock type="event" label="When flag clicked" />
      <DraggableBlock type="event" label="When sprite clicked" />

      {/* Motion */}
      <div className="font-bold text-gray-700 mt-4 mb-1">Motion</div>
      <DraggableBlock type="motion" label="Move 10 steps" actionType="move" value={10} />
      <DraggableBlock type="motion" label="Move -10 steps" actionType="move" value={-10} />
      <DraggableBlock type="motion" label="Turn 15° Left" actionType="turn-undo" value={15} />
      <DraggableBlock type="motion" label="Turn 15° Right" actionType="turn-redo" value={15} />
    </div>
  );
}
