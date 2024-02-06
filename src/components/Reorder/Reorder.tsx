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
      style={{
        boxShadow,
        y,
        display: "flex",
        alignItems: "center",
        width: "inherit",
      }}
      className="flex-wrap lg:flex-nowrap"
    >
      {items.map((item) => (
        <Reorder.Item key={item.title} value={item}>
          <div className="flex aspect-square max-h-full flex-col items-center justify-center p-4">
            <Image
              width={80}
              height={80}
              src={item.icon}
              alt={item.title}
              className="mx-auto my-0 aspect-square h-40 w-32 grayscale"
            />
            <p className="hidden pt-4 text-center lg:flex">
              {item.description}
            </p>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
