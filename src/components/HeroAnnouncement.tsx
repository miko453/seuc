
"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

export function HeroAnnouncement() {
  const [index, setIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        setIsGlitching(false);
      }, 200);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest text-accent border border-accent/30 rounded-full transition-all duration-200 ${isGlitching ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <AlertCircle className="h-3 w-3 animate-pulse" />
      <span>[ 系统实时噩耗 ]：{ANNOUNCEMENTS[index]}</span>
    </div>
  );
}
