
"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Clock } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

export function HeroAnnouncement() {
  const [index, setIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [lagTime, setLagTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date(Date.now() - 24 * 60 * 60 * 1000);
      setLagTime(date.toLocaleTimeString('zh-CN', { hour12: false }));
    };
    
    updateTime();
    const tInterval = setInterval(updateTime, 1000);

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
        setIsGlitching(false);
      }, 200);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearInterval(tInterval);
    };
  }, []);

  return (
    <div className={`inline-flex flex-col md:flex-row items-center gap-4 mb-10 transition-all duration-200 ${isGlitching ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <div className="flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-accent border border-accent/30 rounded-full bg-accent/5">
        <AlertCircle className="h-3 w-3 animate-pulse" />
        <span>[ 系统噩耗 ]：{ANNOUNCEMENTS[index]}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono font-bold text-muted-foreground border border-primary/20 rounded-full">
        <Clock className="h-3 w-3" />
        <span>延迟时间同步: {lagTime}</span>
      </div>
    </div>
  );
}
