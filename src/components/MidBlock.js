import React from "react";
import { useDrag } from "react-dnd";

const ItemTypes = {
  BLOCK: "block",
};

export default function MidBlock({ block, index }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BLOCK,
    item: { ...block, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`px-3 py-2 my-2 text-sm text-white rounded cursor-move ${
        block.type === "event" ? "bg-yellow-500" : "bg-blue-500"
      } ${isDragging ? "opacity-50" : "opacity-100"}`}
    >
      {block.label}
    </div>
  );
}
