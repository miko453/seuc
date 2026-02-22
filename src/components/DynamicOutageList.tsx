
"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Zap } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

type Incident = {
  id: number;
  time: string;
  title: string;
  status: string;
};

export function DynamicOutageList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    // 初始化时展示最近的几个
    const initial = [
      { id: Date.now(), time: "刚刚", title: ANNOUNCEMENTS[0], status: "火化中" }
    ];
    setIncidents(initial);

    let count = 1;
    const interval = setInterval(() => {
      const nextIncident = {
        id: Date.now(),
        time: "实时",
        title: ANNOUNCEMENTS[count % ANNOUNCEMENTS.length],
        status: Math.random() > 0.5 ? "全线瘫痪" : "玄学抢修"
      };
      
      setIncidents(prev => [nextIncident, ...prev].slice(0, 5));
      count++;
    }, 6000); // 与 HeroAnnouncement 同步频率

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4 text-primary font-bold animate-pulse">
        <Zap className="h-4 w-4" />
        <span className="text-sm uppercase tracking-tighter">实时瘫痪直播间</span>
      </div>
      
      {incidents.map((incident) => (
        <div key={incident.id} className="group cursor-pointer border-l-2 border-primary/20 pl-4 pb-4 hover:border-accent transition-all animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
               {incident.time}
            </span>
            <Badge variant="outline" className="text-[8px] font-mono py-0 text-destructive border-destructive/50">
              {incident.status}
            </Badge>
          </div>
          <h4 className="text-xs font-bold group-hover:text-accent transition-colors">
            {incident.title}
          </h4>
        </div>
      ))}

      <div className="pt-2 text-center opacity-50">
        <p className="text-[9px] font-mono italic">
          * 只要网不通，噩耗就一直刷
        </p>
      </div>
    </div>
  );
}
