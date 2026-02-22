"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, Network, Zap, CloudOff } from "lucide-react";
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
              <h1 className="text-4xl font-headline font-bold mb-2">定制你的 <span className="text-accent">混乱</span></h1>
              <p className="text-muted-foreground italic font-mono text-sm">配置你的服务器。我们会忽略这些设置，并随机从杂物间里给你找一台。</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" /> CPU 核心 (与 5,000 人共享)
                </h3>
                <Badge variant="outline" className="text-accent">{cpu} vCPU</Badge>
              </div>
              <Slider 
                value={cpu} 
                onValueChange={setCpu} 
                max={1} 
                step={0.1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">建议选择较低值，以免耗电过多导致房东家跳闸。</p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-headline flex items-center gap-2">
                  <HardDrive className="h-5 w-5 text-primary" /> 内存 (严重超卖)
                </h3>
                <Badge variant="outline" className="text-accent">{ram} GB</Badge>
              </div>
              <Slider 
                value={ram} 
                onValueChange={setRam} 
                max={128} 
                step={1} 
                className="[&_.relative]:bg-primary" 
              />
              <p className="text-[10px] text-muted-foreground font-mono italic">如果你想让我们通过一个拙劣的 WebAssembly 技巧偷偷占用你浏览器的内存，请选择 128GB。</p>
            </section>

            <section className="space-y-6">
              <h3 className="text-xl font-headline flex items-center gap-2">
                <Network className="h-5 w-5 text-primary" /> 网络“速度”
              </h3>
              <RadioGroup defaultValue="dialup" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="dialup" id="dialup" />
                  <Label htmlFor="dialup" className="flex flex-col">
                    <span className="font-bold">56k 拨号 (经典款)</span>
                    <span className="text-[10px] opacity-60">通过真实的调制解调器认证。噪音很大。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="neighbor" id="neighbor" />
                  <Label htmlFor="neighbor" className="flex flex-col">
                    <span className="font-bold">邻居家的 Wi-Fi</span>
                    <span className="text-[10px] opacity-60">速度很快，但邻居睡觉后会断网。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="carrier" id="carrier" />
                  <Label htmlFor="carrier" className="flex flex-col">
                    <span className="font-bold">IPoAC (信鸽 IP)</span>
                    <span className="text-[10px] opacity-60">极高延迟 (8-12小时)。极高丢包率 (老鹰干扰)。</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border-2 border-primary/20 p-4 rounded-lg bg-card hover:border-accent transition-colors">
                  <RadioGroupItem value="magic" id="magic" />
                  <Label htmlFor="magic" className="flex flex-col">
                    <span className="font-bold">量子随机</span>
                    <span className="text-[10px] opacity-60">网络连通性取决于你的心情。</span>
                  </Label>
                </div>
              </RadioGroup>
            </section>
          </div>

          <aside className="w-full md:w-80 sticky top-24">
            <Card className="border-4 border-accent shadow-[0_0_20px_rgba(231,107,237,0.15)] bg-card overflow-hidden">
              <CardHeader className="bg-accent text-white p-4">
                <CardTitle className="text-lg uppercase tracking-tighter">预计账单 (全是假的)</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between font-mono text-sm">
                  <span>基础价格</span>
                  <span>$0.99</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span>“在线”服务费</span>
                  <span>$45.00</span>
                </div>
                <div className="flex justify-between font-mono text-sm text-destructive font-bold">
                  <span>故障保险</span>
                  <span>$120.00</span>
                </div>
                <div className="pt-4 border-t border-primary/20 flex justify-between items-end">
                  <span className="font-headline text-xl">总计:</span>
                  <span className="text-3xl font-bold text-accent">$165.99/小时</span>
                </div>
                <p className="text-[9px] text-muted-foreground italic leading-tight text-center">
                  * 价格每 15 秒变动一次，具体取决于我们 CEO 的股票表现。
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary text-white font-bold py-6 group">
                  购买这场灾难
                  <Zap className="ml-2 h-4 w-4 group-hover:animate-glitch" />
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6 p-4 border border-dashed border-primary/40 rounded italic text-[10px] text-center opacity-70">
              <CloudOff className="h-6 w-6 mx-auto mb-2 opacity-30" />
              “我买了 128GB 的套餐，现在我笔记本的风扇在关机时还在转。5星好评。” - 一位满意的受害者
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
