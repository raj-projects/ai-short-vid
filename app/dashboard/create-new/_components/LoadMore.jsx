"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function LoadMore({ items, initialCount = 4 }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, initialCount);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-muted shadow-sm hover:bg-muted/70 transition"
          >
            {item}
          </div>
        ))}
      </div>

      {items.length > initialCount && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center gap-2 rounded-xl"
          >
            {showAll ? (
              <>
                View Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View More
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
