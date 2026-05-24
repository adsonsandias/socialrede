"use client";

import { useEffect, useRef } from "react";

export function useDragToScroll<T extends HTMLElement>(options?: {
  lockAxis?: "x" | "y";
  stopClickThreshold?: number;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const lockAxis = options?.lockAxis ?? "x";
    const stopClickThreshold = options?.stopClickThreshold ?? 8;

    let pointerId: number | null = null;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;
    let moved = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      if ((e.target as HTMLElement | null)?.closest("input, textarea, select"))
        return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      startScrollLeft = el.scrollLeft;
      startScrollTop = el.scrollTop;
      moved = false;
      el.setPointerCapture(pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (pointerId !== e.pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (Math.hypot(dx, dy) > stopClickThreshold) moved = true;
      if (lockAxis === "x") el.scrollLeft = startScrollLeft - dx;
      else el.scrollTop = startScrollTop - dy;
    };

    const onPointerUpOrCancel = (e: PointerEvent) => {
      if (pointerId !== e.pointerId) return;
      pointerId = null;
    };

    const onClickCapture = (e: MouseEvent) => {
      if (!moved) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("a")) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUpOrCancel);
    el.addEventListener("pointercancel", onPointerUpOrCancel);
    el.addEventListener("click", onClickCapture, { capture: true });

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUpOrCancel);
      el.removeEventListener("pointercancel", onPointerUpOrCancel);
      el.removeEventListener("click", onClickCapture, { capture: true } as any);
    };
  }, [options?.lockAxis, options?.stopClickThreshold]);

  return ref;
}

