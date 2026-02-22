"use client";

import { 
  Info, AlertTriangle, ExternalLink, RefreshCcw, 
  Cpu, Database, CreditCard, Activity, Users, 
  TrendingUp, ShieldCheck, HelpCircle, Network
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DynamicOutageList } from "@/components/DynamicOutageList";
import { useEffect, useState } from "react";

export default function Home() {
  const [lagTime, setLagTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // 模拟村口时差：当前时间 - 12小时
      const date = new Date(Date.now() - 12 * 60 * 60 * 1000);
      setLagTime(date.toLocaleTimeString('zh-CN', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 space-y-8">
      {/* Welcome Banner */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#202124]">控制台概览</h1>
          <p className="text-sm text-muted-foreground mt-1">
            欢迎回来，大槐树村管理员。当前村口时差 (-12H): {lagTime}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs h-8 bg-white border-[#dadce0] text-[#3c4043] hover:bg-[#f8f9fa]">
            <RefreshCcw className="h-3.5 w-3.5 mr-2" /> 刷新 (并无卵用)
          </Button>
          <Button size="sm" className="text-xs h-8 bg-primary hover:bg-primary/90">
            自定义
          </Button>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Project Info Card */}
        <Card className="console-card">
          <CardHeader className="p-4 border-b border-[#f1f3f4]">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#3c4043]">
              <Info className="h-4 w-4 text-primary" /> 项目信息
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">项目名称</p>
              <p className="text-sm font-medium">大槐树村-prod-01</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">项目 ID</p>
              <p className="text-sm font-medium font-mono text-primary">village-duck-9527</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-wider">当前资产 (走丢鸭子数)</p>
              <p className="text-sm font-medium">420,690,1337</p>
            </div>
            <div className="pt-2 border-t border-[#f1f3f4]">
              <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold">前往项目设置</Button>
            </div>
          </CardContent>
        </Card>

        {/* Resources Card */}
        <Card className="console-card">
          <CardHeader className="p-4 border-b border-[#f1f3f4]">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#3c4043]">
              <Cpu className="h-4 w-4 text-primary" /> 资源概览 (超开状态)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Compute Engine (发电机)</span>
                <Badge variant="destructive" className="text-[10px] rounded-sm px-1 py-0 h-4">99+ 宕机</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cloud Storage (地窖)</span>
                <Badge variant="outline" className="text-[10px] rounded-sm px-1 py-0 h-4 text-orange-500 border-orange-200">1个 (漏水中)</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">村口信鸽带宽</span>
                <span className="text-sm font-mono text-destructive font-bold">0.01 bps</span>
              </div>
              <div className="pt-2 border-t border-[#f1f3f4]">
                <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold">查看所有资源</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Billing Card */}
        <Card className="console-card">
          <CardHeader className="p-4 border-b border-[#f1f3f4]">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#3c4043]">
              <CreditCard className="h-4 w-4 text-primary" /> 结算 (韭菜生长)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold tracking-tighter text-destructive">-$8,420.00</span>
              <span className="text-[10px] text-muted-foreground pb-1 font-mono">/ 每分钟</span>
            </div>
            <p className="text-[10px] text-muted-foreground italic leading-tight">
              预测本月结余：卖房还债。系统已自动开启“资产转移至村长账户”功能。
            </p>
            <div className="h-16 w-full bg-muted/30 rounded flex items-center justify-center border border-dashed border-[#dadce0]">
              <TrendingUp className="h-8 w-8 text-destructive opacity-20" />
            </div>
            <div className="pt-2 border-t border-[#f1f3f4]">
              <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold">前往割韭菜中心</Button>
            </div>
          </CardContent>
        </Card>

        {/* Dynamic Outage (Activity) Card */}
        <Card className="console-card md:col-span-2">
          <CardHeader className="p-4 border-b border-[#f1f3f4]">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#3c4043]">
              <Activity className="h-4 w-4 text-primary" /> 实时事故 (活动日志)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <DynamicOutageList />
          </CardContent>
        </Card>

        {/* API Card */}
        <Card className="console-card">
          <CardHeader className="p-4 border-b border-[#f1f3f4]">
            <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#3c4043]">
              <Network className="h-4 w-4 text-primary" /> API 与服务 (老王波段)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive animate-ping" />
                <span className="text-[#3c4043]">村口公共广播 API</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[#3c4043]">邻居 WiFi 嗅探服务</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[#3c4043]">信鸽路径优化引擎</span>
              </div>
            </div>
            <div className="pt-6 border-t border-[#f1f3f4] mt-4">
              <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold">转至 API 概览</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Satirical Support Section */}
      <section className="bg-[#e8f0fe] rounded-lg p-6 flex items-center justify-between border border-[#d2e3fc]">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-[#1967d2]">需要村长亲自帮助？</h4>
            <p className="text-xs text-[#5f6368]">村长正在地头忙碌，响应时间约为：等到他孙子结婚（预计 2099 年）。</p>
          </div>
        </div>
        <Button variant="outline" className="bg-white text-xs border-[#1a73e8] text-[#1a73e8] hover:bg-[#e8f0fe] font-bold">
          提交工单 (立即忽略)
        </Button>
      </section>
    </div>
  );
}
