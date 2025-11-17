"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className={cn(
              "rounded-xl border bg-white px-4 py-3 shadow-sm cursor-pointer transition-colors",
              isOpen ? "border-teal-600 bg-teal-50/60" : "border-gray-200"
            )}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-medium text-gray-900">{item.question}</p>
              <span className="text-lg text-teal-700" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && (
              <p className="mt-2 text-sm text-gray-700">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}


