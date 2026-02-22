
"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, AlertTriangle } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/satire-data";

type Incident = {
  id: number;
  time: string;
  title: string;
  status: string;
  severity: "low" | "medium" | "high";
};

export function DynamicOutageList() {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  // 讽刺时差：北京时间 - 12小时
  const getFakedTime = () => {
    const date = new Date(Date.now() - 12 * 60 * 60 * 1000);
    return date.toLocaleTimeString('zh-CN', { hour12: false });
  };

  useEffect(() => {
    const generateIncident = () => ({
      id: Date.now(),
      time: getFakedTime(),
      title: ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)],
      status: Math.random() > 0.5 ? "已瘫痪" : "玄学抢修",
      severity: Math.random() > 0.7 ? "high" : Math.random() > 0.3 ? "medium" : "low" as any
    });

    setIncidents([generateIncident()]);

    const interval = setInterval(() => {
      setIncidents(prev => [generateIncident(), ...prev].slice(0, 10));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card/50 border border-primary/20 rounded-lg overflow-hidden">
      <div className="bg-primary/10 px-4 py-2 border-b border-primary/20 flex items-center justify-between">
        <h3 className="text-xs font-bold flex items-center gap-2">
          <AlertTriangle className="h-3 w-3 text-primary animate-pulse" /> 实时噩耗直播
        </h3>
        <span className="text-[10px] font-mono opacity-50">时差: -12H</span>
      </div>
      
      <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto scrollbar-hide">
        {incidents.map((incident) => (
          <div key={incident.id} className="group border-l-2 border-primary/20 pl-4 py-1 hover:border-accent transition-all animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                <Clock className="h-2 w-2" /> {incident.time}
              </span>
              <Badge variant="outline" className={`text-[8px] py-0 border-none px-1 rounded ${
                incident.severity === 'high' ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'
              }`}>
                {incident.status}
              </Badge>
            </div>
            <p className="text-[11px] font-medium group-hover:text-accent transition-colors leading-snug">
              {incident.title}
            </p>
          </div>
        ))}
      </div>

      <div className="p-3 bg-muted/20 border-t border-primary/10 text-center">
        <p className="text-[9px] font-mono italic opacity-40">
          * 故障恢复时间取决于村口老王的修网速度
        </p>
      </div>
    </div>
  );
}
