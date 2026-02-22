
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ShieldCheck, FileText, Camera, UserCheck, 
  Hourglass, AlertTriangle, Fingerprint, Stamp 
} from "lucide-react";
import { useState } from "react";

const BEIAN_STEPS = [
  { id: 1, title: "受害者登记", icon: FileText, desc: "填写您的姓名、籍贯以及余额截图。" },
  { id: 2, title: "村口大树拍照", icon: Camera, desc: "请手持身份证在村口老槐树下进行合影。" },
  { id: 3, title: "村长亲自面谈", icon: UserCheck, desc: "村长将评估您是否具备‘被绿’的潜质。" },
  { id: 4, title: "老王指纹采集", icon: Fingerprint, desc: "因为宽带是老王的，他需要确认你的身份。" },
  { id: 5, title: "终极跑路备案", icon: Stamp, desc: "签署‘如果数据丢了就当没发生过’协议。" }
];

export default function BeianPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (currentStep < 5) {
        setCurrentStep(prev => prev + 1);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <Badge variant="outline" className="border-primary/40 text-primary mb-4">
            ICP/IP/VILLAGE 备案系统 2.0
          </Badge>
          <h1 className="text-5xl font-headline font-black italic tracking-tighter">
            村口 <span className="text-primary">合规</span> 备案
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            为了确保您的网站能在村长的眼皮底下活过明天，请完成以下繁琐的备案流程。
          </p>
        </header>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {BEIAN_STEPS.map((step) => (
            <div 
              key={step.id} 
              className={`p-4 rounded-xl border-2 transition-all ${
                currentStep >= step.id ? 'border-primary bg-primary/5' : 'border-muted opacity-40'
              }`}
            >
              <step.icon className={`h-6 w-6 mb-2 ${currentStep >= step.id ? 'text-primary' : ''}`} />
              <p className="text-[10px] font-bold uppercase font-mono">Step 0{step.id}</p>
              <p className="text-xs font-bold">{step.title}</p>
            </div>
          ))}
        </div>

        <Card className="border-4 border-primary bg-card/50 overflow-hidden">
          <div className="bg-primary/10 p-4 border-b border-primary/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Hourglass className="h-4 w-4 text-primary animate-spin" />
              <span className="text-xs font-mono font-bold">备案状态：{currentStep === 5 ? '正在等待村长盖章' : '资料审核中...'}</span>
            </div>
            <span className="text-xs font-mono">进度: {currentStep * 20}%</span>
          </div>
          
          <CardContent className="p-12 text-center space-y-8">
            <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              {(() => {
                const Icon = BEIAN_STEPS[currentStep - 1].icon;
                return <Icon className="h-12 w-12 text-primary animate-pulse" />;
              })()}
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold italic">{BEIAN_STEPS[currentStep - 1].title}</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                {BEIAN_STEPS[currentStep - 1].desc}
              </p>
            </div>

            {currentStep === 5 ? (
              <div className="p-6 bg-destructive/10 border-2 border-dashed border-destructive/20 rounded-xl space-y-4">
                <AlertTriangle className="h-8 w-8 text-destructive mx-auto" />
                <p className="text-sm font-bold text-destructive italic">
                  警告：由于村长下乡考察（去县城赶集），备案终审可能延迟 3 到 4 个世纪。
                </p>
                <Button className="bg-destructive hover:bg-destructive/80 text-white font-bold">
                  给村长发红包 (加速 0.001%)
                </Button>
              </div>
            ) : (
              <Button 
                onClick={handleNext} 
                disabled={isProcessing}
                className="bg-primary hover:bg-primary/80 text-white font-black px-12 h-14 text-lg"
              >
                {isProcessing ? '正在上传至村委会...' : '下一步'}
              </Button>
            )}
          </CardContent>
          
          <div className="bg-muted/30 p-4 border-t border-primary/10 text-center">
            <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
              © 村委会信息通信发展司 · 非官方 · 非盈利 · 纯属意外
            </p>
          </div>
        </Card>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card border-primary/10">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-primary" /> 备案优势
            </h4>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">✓ 网站不会被村口大喇叭点名批评</li>
              <li className="flex items-center gap-2">✓ 获得地窖机房物理防火墙（指上锁）</li>
              <li className="flex items-center gap-2">✓ 老王会优先保证你的 WiFi 信号</li>
            </ul>
          </Card>
          <Card className="p-6 bg-card border-primary/10">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <Stamp className="h-5 w-5 text-primary" /> 常见问题
            </h4>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">Q: 备案收费吗？</li>
              <li className="flex items-center gap-2">A: 收取两块五花肉作为人工审核费。</li>
              <li className="flex items-center gap-2">Q: 什么时候能审完？</li>
              <li className="flex items-center gap-2">A: 等技术员小王娶到媳妇以后。</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
