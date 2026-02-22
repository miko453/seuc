
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Skull, Coffee, Flame, Signal, WifiOff, Bird } from "lucide-react";
import { useEffect, useState } from "react";

type NodeStatus = {
  name: string;
  provider: string;
  location: string;
  uptime: string;
  load: string;
  network: string;
  status: "online" | "offline" | "glitch" | "fire";
};

const INITIAL_NODES: NodeStatus[] = [
  { name: "村口桥头-01", provider: "老王自营", location: "电线杆上", uptime: "0.01%", load: "99.9%", network: "128Kbps", status: "online" },
  { name: "地窖中央-A", provider: "村长电信", location: "咸菜坛子旁", uptime: "15s", load: "120%", network: "5Mbps", status: "glitch" },
  { name: "张三家烟囱", provider: "张三移动", location: "受热均匀处", uptime: "0%", load: "0%", network: "0Kbps", status: "fire" },
  { name: "信鸽转发站", provider: "专业禽类", location: "村东头槐树", uptime: "随缘", load: "饱腹", network: "IPoAC", status: "online" },
  { name: "小李家路由器", provider: "TP-Link", location: "沙发缝", uptime: "3min", load: "200%", network: "1格", status: "offline" },
  { name: "村委会公共波段", provider: "大喇叭", location: "广播站", uptime: "播音时在线", load: "吵闹", network: "模拟信号", status: "glitch" },
];

export default function NodesPage() {
  const [nodes, setNodes] = useState(INITIAL_NODES);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        load: (Math.random() * 100 + 50).toFixed(1) + "%",
        network: Math.random() > 0.8 ? "断网中" : node.network,
        status: Math.random() > 0.9 ? "offline" : Math.random() > 0.7 ? "glitch" : node.status
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <main className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-5xl font-headline font-black italic text-primary tracking-tighter">
            全球 <span className="text-accent underline decoration-4">瘫痪</span> 节点探针
          </h1>
          <p className="text-muted-foreground mt-2 font-mono uppercase tracking-widest text-sm">
            STATUS: 正在努力尝试不崩溃 | 实时同步: 延迟 12 小时
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nodes.map((node, i) => (
            <Card key={i} className={`bg-card border-2 transition-all duration-700 shadow-lg ${
              node.status === 'online' ? 'border-primary/20' : 
              node.status === 'offline' ? 'border-destructive' : 
              node.status === 'fire' ? 'border-orange-500 animate-pulse' : 'border-accent/40'
            }`}>
              <CardHeader className="pb-2 border-b border-primary/10">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      {node.status === 'online' && <Signal className="h-4 w-4 text-primary" />}
                      {node.status === 'offline' && <WifiOff className="h-4 w-4 text-destructive" />}
                      {node.status === 'fire' && <Flame className="h-4 w-4 text-orange-500" />}
                      {node.status === 'glitch' && <Skull className="h-4 w-4 text-accent" />}
                      {node.name}
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono mt-1 uppercase">位置: {node.location}</p>
                  </div>
                  <Badge variant={node.status === 'online' ? 'secondary' : 'destructive'} className="text-[9px]">
                    {node.status === 'online' ? '运行中' : node.status === 'fire' ? '火化中' : '已挂'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                  <div className="space-y-1">
                    <p className="opacity-50 text-[9px] uppercase">提供商</p>
                    <p className="font-bold">{node.provider}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="opacity-50 text-[9px] uppercase">在线时间</p>
                    <p className="font-bold text-accent">{node.uptime}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="opacity-50 text-[9px] uppercase">当前负载</p>
                    <p className={`font-bold ${parseFloat(node.load) > 90 ? 'text-destructive animate-pulse' : 'text-primary'}`}>{node.load}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="opacity-50 text-[9px] uppercase">网络强度</p>
                    <p className="font-bold flex items-center gap-1">
                      {node.network === 'IPoAC' ? <Bird className="h-3 w-3" /> : <Wifi className="h-3 w-3" />}
                      {node.network}
                    </p>
                  </div>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-1000 ${node.status === 'online' ? 'bg-primary' : 'bg-destructive'}`} style={{ width: node.status === 'online' ? '80%' : '5%' }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-dashed border-primary/20 rounded-2xl text-center bg-primary/5">
          <Coffee className="h-12 w-12 mx-auto text-primary/40 mb-4" />
          <h3 className="text-xl font-bold italic mb-2">想在你的院子里挂个节点？</h3>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            只要你家有 220V 电源（或者能手摇发电）且老王的 WiFi 没改密码，你就能成为村口云的一员。我们将支付你每月两斤鸡蛋作为租金。
          </p>
        </div>
      </main>
    </div>
  );
}
