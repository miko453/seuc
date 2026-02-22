
"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Clock, Zap } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

export function HeroAnnouncement() {
  const [index, setIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [lagTime, setLagTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // 12小时时差逻辑
      const date = new Date(Date.now() - 12 * 60 * 60 * 1000);
      setLagTime(date.toLocaleTimeString('zh-CN', { hour12: false }));
    };
    
    updateTime();
    const tInterval = setInterval(updateTime, 1000);

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        setIsGlitching(false);
      }, 150);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(tInterval);
    };
  }, []);

  return (
    <div className={`inline-flex flex-col md:flex-row items-center gap-4 mb-6 transition-all duration-200 ${isGlitching ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'}`}>
      <div className="flex items-center gap-2 px-3 py-1 text-[10px] font-mono font-bold text-accent border border-accent/30 rounded bg-accent/5">
        <Zap className="h-3 w-3 animate-pulse" />
        <span className="uppercase tracking-widest">CRITICAL ERROR:</span>
        <span className="text-foreground">{ANNOUNCEMENTS[index]}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1 text-[10px] font-mono font-bold text-muted-foreground border border-primary/20 rounded bg-card/40">
        <Clock className="h-3 w-3" />
        <span>村口时差 (-12H): {lagTime}</span>
      </div>
    </div>
  );
}
