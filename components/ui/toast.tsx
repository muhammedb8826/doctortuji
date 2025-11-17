"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

export type ToastType = "success" | "error";

export interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ type, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!duration) return;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [duration, onClose]);

  const isSuccess = type === "success";

  return (
    <div
      className="fixed top-3 inset-x-0 z-50 flex justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div
        className={cn(
          "max-w-xl w-full flex items-start gap-3 rounded-lg border px-3 py-2.5 text-sm shadow-md",
          isSuccess
            ? "bg-emerald-50 border-emerald-200 text-emerald-800"
            : "bg-red-50 border-red-200 text-red-800"
        )}
      >
        <span
          className={cn(
            "mt-1 h-2 w-2 rounded-full",
            isSuccess ? "bg-emerald-500" : "bg-red-500"
          )}
        />
        <p className="flex-1">{message}</p>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
    </div>
  );
}


