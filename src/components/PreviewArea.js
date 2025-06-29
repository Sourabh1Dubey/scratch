// 📁 components/PreviewArea.js
import React, { useState, useEffect } from "react";
import CatSprite from "./CatSprite";
import { useDroppedBlocks } from "./DroppedBlocksContext";

export default function PreviewArea() {
  const { blocks1, blocks2 } = useDroppedBlocks();

  const [actions1, setActions1] = useState([]);
  const [actions2, setActions2] = useState([]);
  const [resetFlag, setResetFlag] = useState(0);
  const [positions, setPositions] = useState({
    sprite1: { x: 0, y: 0 },
    sprite2: { x: 200, y: 0 },
  });
  const [collision, setCollision] = useState(false);
  const [lastCollision, setLastCollision] = useState(false);

  const extractActions = (blocks) =>
    blocks
      .filter((b) => b.type === "motion" && b.actionType)
      .map(({ actionType, value }) => ({
        actionType,
        value,
      }));

  const handleRunAll = () => {
    setActions1(extractActions(blocks1));
    setActions2(extractActions(blocks2));
    setResetFlag((prev) => prev + 1);
    setCollision(false);
    setLastCollision(false);
  };

  const handleReset = () => {
    setActions1([]);
    setActions2([]);
    setResetFlag((prev) => prev + 1);
    setCollision(false);
    setLastCollision(false);
    setPositions({
      sprite1: { x: 0, y: 0 },
      sprite2: { x: 200, y: 0 },
    });
  };

  const handlePositionChange = (id, x, y) => {
    setPositions((prev) => ({
      ...prev,
      [id === 1 ? "sprite1" : "sprite2"]: { x, y },
    }));
  };

  useEffect(() => {
    const s1 = positions.sprite1;
    const s2 = positions.sprite2;
    const size = 100;

    const isColliding =
      s1.x < s2.x + size &&
      s1.x + size > s2.x &&
      s1.y < s2.y + size &&
      s1.y + size > s2.y;

    if (isColliding && !lastCollision) {
      setCollision(true);
      setLastCollision(true);

      // Swap actions on collision
      setActions1((prev) => actions2);
      setActions2((prev) => actions1);
    }
  }, [positions, lastCollision, actions1, actions2]);

  return (
    <div className="flex-none h-full w-60 border-l border-gray-200 p-2 flex flex-col items-center">
      <div className="mb-20 space-x-2">
        <button
          onClick={handleRunAll}
          className="px-4 py-1 bg-green-500 text-white rounded"
          
        >
          Flag
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-1 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="relative w-full h-[300px] border bg-white flex items-center justify-center">
        <CatSprite
          spriteId={1}
          actions={actions1}
          resetFlag={resetFlag}
          onPositionChange={handlePositionChange}
          collision={collision}
        />
        <CatSprite
          spriteId={2}
          actions={actions2}
          resetFlag={resetFlag}
          onPositionChange={handlePositionChange}
          collision={collision}
        />
      </div>

      {collision && (
        <div className="mt-4 text-red-600 font-bold text-sm">
          🚨 Collision Detected! Sprites swapped actions!
        </div>
      )}
    </div>
  );
}
