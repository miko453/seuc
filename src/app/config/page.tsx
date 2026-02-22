
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Network, Zap, CloudOff, Wifi, Radio } from "lucide-react";
import { useState } from "react";

export default function ConfigPage() {
  const [ram, setRam] = useState([1]);
  const [cpu, setCpu] = useState([0.1]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-12">
            <section>
              <h1 className="text-4xl font-headline font-bold mb-2">定制你的 <span className="text-primary italic">超开</span> 服务</h1>
              <p className="text-muted-foreground italic font-mono text-sm">配置你的虚构服务器。我们会根据心情给你分配一个随机的报错信息。</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" /> CPU 核心 (超开 1:100)
                </h3>
                <Badge variant="outline" className="text-accent border-accent">{cpu} vCPU</Badge>
              </div>
              <Slider 
                value={cpu} 
                onValueChange={setCpu} 
                max={1} 
                step={0.1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">提示：即便你选了 1.0，实际上跑起来也就相当于一个电子计算器。</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" /> 内存 (严重超卖)
                </h3>
                <Badge variant="outline" className="text-accent border-accent">{ram} GB</Badge>
              </div>
              <Slider 
                value={ram} 
                onValueChange={setRam} 
                max={128} 
                step={1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">如果你选了 128GB，我们会用一段 Python 脚本在终端里循环打印“内存已满”。</p>
            </section>

            <section className="space-y-6">
              <h3 className="text-xl font-headline flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" /> 网络带宽来源
              </h3>
              <RadioGroup defaultValue="neighbor" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="neighbor" id="neighbor" />
                  <Label htmlFor="neighbor" className="flex flex-col cursor-pointer">
                    <span className="font-bold flex items-center gap-2"><Wifi className="h-3 w-3" /> 邻居家的 Wi-Fi (快但看缘分)</span>
                    <span className="text-[10px] opacity-60">老王睡觉前很快。他睡觉关路由后你会掉线。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="sim" id="sim" />
                  <Label htmlFor="sim" className="flex flex-col cursor-pointer">
                    <span className="font-bold flex items-center gap-2"><Radio className="h-3 w-3" /> 运营商无限流量卡 (月底必断)</span>
                    <span className="text-[10px] opacity-60">每天限速 1KB，用完 1GB 后彻底变砖。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="manual" id="manual" />
                  <Label htmlFor="manual" className="flex flex-col cursor-pointer">
                    <span className="font-bold">纯手动拨号 (客服亲自拉线)</span>
                    <span className="text-[10px] opacity-60">技术员会在地窖里不停地插拔电话线。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="pigeon" id="pigeon" />
                  <Label htmlFor="pigeon" className="flex flex-col cursor-pointer">
                    <span className="font-bold">信鸽 IP (IPoAC)</span>
                    <span className="text-[10px] opacity-60">极高延迟，极高丢包率 (鸽子可能被村口的老鹰吃了)。</span>
                  </Label>
                </div>
              </RadioGroup>
            </section>
          </div>

          <aside className="w-full md:w-80 sticky top-24">
            <Card className="border-4 border-primary shadow-[0_0_20px_rgba(34,197,94,0.15)] bg-card overflow-hidden">
              <CardHeader className="bg-primary text-white p-4">
                <CardTitle className="text-lg uppercase tracking-tighter">账单预估 (坑死一个算一个)</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between font-mono text-sm">
                  <span>超开税</span>
                  <span>$88.00</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span>老王 WiFi 维护费</span>
                  <span>$25.00</span>
                </div>
                <div className="flex justify-between font-mono text-sm text-destructive font-bold">
                  <span>跑路保险 (必选)</span>
                  <span>$200.00</span>
                </div>
                <div className="pt-4 border-t border-primary/20 flex justify-between items-end">
                  <span className="font-headline text-xl">总计:</span>
                  <span className="text-3xl font-bold text-primary">$313.00/秒</span>
                </div>
                <p className="text-[9px] text-muted-foreground italic leading-tight text-center">
                  * 我们保留随时卷钱跑路的权利，无需通知。
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-accent text-black font-bold py-6 group hover:bg-accent/80 border-b-4 border-primary">
                  确认被绿 (立即购买)
                  <Zap className="ml-2 h-4 w-4 group-hover:animate-glitch" />
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6 p-4 border border-dashed border-primary/40 rounded italic text-[10px] text-center opacity-70">
              <CloudOff className="h-6 w-6 mx-auto mb-2 opacity-30" />
              “自从买了村口云，我的应用不仅慢了，连我的人都变绿了。5星好评，全家桶带回家。” - 隔壁小李
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
