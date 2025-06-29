import React from "react";
import { useDrop } from "react-dnd";
import { useDroppedBlocks } from "./DroppedBlocksContext";

function DraggableMidBlock({ block }) {
  return (
    <div
      className={`px-2 py-1 my-1 text-sm text-white rounded cursor-move select-none ${
        block.type === "event" ? "bg-yellow-500" : "bg-blue-500"
      }`}
    >
      {block.label}
    </div>
  );
}

export default function DroppableArea({ spriteId }) {
  const {
    blocks1,
    setBlocks1,
    blocks2,
    setBlocks2,
  } = useDroppedBlocks();

  const blocks = spriteId === 1 ? blocks1 : blocks2;
  const setBlocks = spriteId === 1 ? setBlocks1 : setBlocks2;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ["event", "motion"],
    drop: (item) => {
      if (item.index === undefined) {
        setBlocks((prev) => [
          ...prev,
          {
            ...item,
            actionType: item.actionType || null,
            value: item.value || null,
          },
        ]);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`p-4 border border-dashed min-h-[150px] max-h-[300px] overflow-y-auto rounded ${
        isOver ? "bg-gray-100" : ""
      }`}
    >
      {blocks.length === 0 && (
        <div className="text-gray-400 text-sm italic select-none">Drop blocks here</div>
      )}
      {blocks.map((block, index) => (
        <DraggableMidBlock key={index} block={block} index={index} />
      ))}
    </div>
  );
}
