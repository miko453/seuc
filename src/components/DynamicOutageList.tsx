
"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

type Incident = {
  id: number;
  time: string;
  title: string;
  status: string;
};

export function DynamicOutageList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  // 获取过去的时间 (-24h)
  const getFakedTime = () => {
    const date = new Date(Date.now() - 24 * 60 * 60 * 1000);
    return date.toLocaleTimeString('zh-CN', { hour12: false });
  };

  useEffect(() => {
    // 初始化时展示最近的几个
    const initial = [
      { 
        id: Date.now(), 
        time: getFakedTime(), 
        title: ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)], 
        status: "火化中" 
      }
    ];
    setIncidents(initial);

    const interval = setInterval(() => {
      const nextIncident = {
        id: Date.now(),
        time: getFakedTime(),
        title: ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)],
        status: Math.random() > 0.5 ? "全线瘫痪" : "玄学抢修"
      };
      
      setIncidents(prev => [nextIncident, ...prev].slice(0, 8));
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4 text-primary font-bold animate-pulse">
        <Zap className="h-4 w-4" />
        <span className="text-sm uppercase tracking-tighter">实时瘫痪直播间</span>
      </div>
      
      <div className="space-y-4 max-h-[600px] overflow-hidden">
        {incidents.map((incident) => (
          <div key={incident.id} className="group cursor-pointer border-l-2 border-primary/20 pl-4 pb-2 hover:border-accent transition-all animate-in slide-in-from-top-4 duration-500">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="h-2 w-2" /> {incident.time} (延迟24h)
              </span>
              <Badge variant="outline" className="text-[8px] font-mono py-0 text-destructive border-destructive/50">
                {incident.status}
              </Badge>
            </div>
            <h4 className="text-xs font-bold group-hover:text-accent transition-colors leading-relaxed">
              {incident.title}
            </h4>
          </div>
        ))}
      </div>

      <div className="pt-4 text-center opacity-50 border-t border-primary/10">
        <p className="text-[9px] font-mono italic">
          * 系统时间由信鸽同步，误差取决于风力
        </p>
      </div>
    </div>
  );
}
