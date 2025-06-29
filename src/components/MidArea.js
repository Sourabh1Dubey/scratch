import React from "react";
import DroppableArea from "./DroppableArea";

export default function MidArea() {
  return (
    <div className="flex-1 h-full flex gap-4 p-2 overflow-auto">
      {/* Two action areas side-by-side */}
      <div className="flex-1 border border-gray-300 rounded p-2 min-w-[200px] max-h-full overflow-y-auto">
        <h3 className="font-bold mb-2">Action 1 (Sprite 1)</h3>
        <DroppableArea spriteId={1} />
      </div>
      <div className="flex-1 border border-gray-300 rounded p-2 min-w-[200px] max-h-full overflow-y-auto">
        <h3 className="font-bold mb-2">Action 2 (Sprite 2)</h3>
        <DroppableArea spriteId={2} />
      </div>
    </div>
  );
}
