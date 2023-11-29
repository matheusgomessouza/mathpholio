"use client";

import { Reorder, useMotionValue } from "framer-motion";
import { useState } from "react";
import { ReorderProps } from "../../types/interfaces";
import Image from "next/image";
import { useRaisedShadow } from "./use-raised-shadow";

export function ReorderComponent({ data }: ReorderProps) {
  const [items, setItems] = useState(data);
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Group
      axis="x"
      values={items}
      onReorder={setItems}
      style={{ boxShadow, y, display: "flex", gap: "18px" }}
    >
      {items.map((item) => (
        <Reorder.Item key={item.title} value={item}>
          <div className="min-h-full w-80 rounded-lg bg-color-tree bg-opacity-10 p-4">
            <Image
              width={100}
              height={68}
              src={item.icon}
              alt={item.title}
              className="h-[100px] pb-8"
            />
            <p className="text-justify">{item.description}</p>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
