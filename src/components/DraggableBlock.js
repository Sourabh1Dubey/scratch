import React from "react";
import { useDrag } from "react-dnd";

export default function DraggableBlock({ type, label, actionType, value }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, label, actionType, value },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      className={`px-2 py-1 my-1 text-sm cursor-pointer ${
        type === "event" ? "bg-yellow-500" : "bg-blue-500"
      } text-white ${isDragging ? "opacity-50" : ""}`}
    >
      {label}
    </div>
  );
}
