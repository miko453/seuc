"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Server, Wifi, Database, Activity, Coffee } from "lucide-react";

type ServerMetric = {
  id: string;
  name: string;
  location: string;
  status: "运行中" | "已挂" | "可能吧" | "正在熔毁";
  uptime: string;
  latency: number;
  packetLoss: number;
  cpuLoad: number;
  isOutage: boolean;
};

const LOCATIONS = ["村长家地下室 A", "42号储藏间", "阁楼 (东翼)", "车库 (割草机旁)", "旧冰箱内部"];
const NAMES = ["算力-F", "残废-节点-01", "催债专用-VPS", "慢速燃烧-04", "烤面包机"];

export default function DashboardPage() {
  const [servers, setServers] = useState<ServerMetric[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const generateServers = () => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `srv-${i}`,
      name: NAMES[i],
      location: LOCATIONS[i],
      status: (Math.random() > 0.8 ? "已挂" : Math.random() > 0.6 ? "可能吧" : "运行中") as any,
      uptime: (Math.random() * 20 + 70).toFixed(2) + "%",
      latency: Math.floor(Math.random() * 2000),
      packetLoss: Math.floor(Math.random() * 50),
      cpuLoad: Math.floor(Math.random() * 100),
      isOutage: false,
    }));
  };

  const ANNOUNCEMENTS = [
    "技术员把咖啡洒在主集群上了。预计恢复时间：遥遥无期。",
    "一只猫走过了配线架。网络现在正在发出呼噜声，但很慢。",
    "房东切断了地下室 A 的电源。我们的电池备份是一节南孚电池。",
    "在客户 CPU 上挖掘比特币已达到峰值效率。你的应用可能会变慢。",
    "4区丢包率已达到 100%。这是一项刻意设计的安全特性。",
  ];

  useEffect(() => {
    setServers(generateServers());
    setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);

    const interval = setInterval(() => {
      setServers(prev => prev.map(srv => {
        const isSpike = Math.random() > 0.8;
        return {
          ...srv,
          status: isSpike ? (Math.random() > 0.5 ? "已挂" : "正在熔毁") : (Math.random() > 0.1 ? "运行中" : "可能吧"),
          latency: isSpike ? Math.floor(srv.latency + Math.random() * 5000) : Math.floor(Math.random() * 500),
          cpuLoad: Math.min(100, Math.max(0, srv.cpuLoad + (Math.random() * 20 - 10))),
        };
      }));
      
      if (Math.random() > 0.9) {
        setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <GlitchOverlay />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-headline font-bold text-accent italic flex items-center gap-4">
              <Activity className="h-10 w-10 animate-pulse" />
              系统状态_v0.1-测试版
            </h1>
            <p className="text-muted-foreground mt-2 font-mono">来自我们不靠谱全球基础设施的实时指标。</p>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/50 p-4 rounded flex items-center gap-4 max-w-md">
            <AlertTriangle className="h-8 w-8 text-destructive shrink-0 animate-bounce" />
            <div className="text-xs font-mono uppercase">
              <span className="text-destructive font-bold block mb-1">重要公告:</span>
              {announcement}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map(server => (
            <Card key={server.id} className={`bg-card border-2 transition-all duration-500 ${server.status === '已挂' ? 'border-destructive shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-primary/20'}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-headline flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      {server.name}
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">{server.location}</p>
                  </div>
                  <Badge variant={server.status === '运行中' ? 'secondary' : server.status === '已挂' ? 'destructive' : 'outline'} 
                    className={`font-bold ${server.status === '运行中' ? 'bg-green-500/20 text-green-400' : ''}`}>
                    {server.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">延迟</p>
                    <p className={`text-xl font-bold ${server.latency > 1000 ? 'text-destructive' : 'text-accent'}`}>{server.latency}ms</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">丢包率</p>
                    <p className="text-xl font-bold text-primary">{server.packetLoss}%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>CPU 负载 (共享)</span>
                    <span className={server.cpuLoad > 90 ? 'text-destructive animate-pulse' : ''}>{Math.round(server.cpuLoad)}%</span>
                  </div>
                  <Progress value={server.cpuLoad} className="h-1 bg-muted [&>div]:bg-primary" />
                  <p className="text-[9px] text-muted-foreground italic">当前用户: [已脱敏的矿工]</p>
                </div>

                <div className="pt-4 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground">承诺在线率: <span className="text-foreground">0.01%</span></span>
                  <span className="text-muted-foreground">实际在线: <span className="text-foreground">{server.uptime}</span></span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-muted/20 border-dashed border-2 border-primary/40 flex items-center justify-center p-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-center space-y-4">
              <Coffee className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="font-headline text-sm">租用更多地下室空间</p>
              <p className="text-[10px] text-muted-foreground font-mono">再买一台 VPS，我们会直接用你的电脑来托管它。</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
