"use client";

import { useEffect, useState } from "react";
import { AlertCircle, RefreshCcw, Skull, WifiOff } from "lucide-react";

export function GlitchOverlay() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const triggerRandomError = () => {
      // 8% chance of triggering a random "Village 502" error every 12 seconds
      if (Math.random() < 0.08) {
        setShowError(true);
      }
    };

    const interval = setInterval(triggerRandomError, 12000);
    return () => clearInterval(interval);
  }, []);

  if (!showError) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0c1a0e] flex flex-col items-center justify-center p-6 text-center animate-flicker">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <WifiOff className="h-24 w-24 text-primary mx-auto animate-glitch" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-xl rounded-full" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-primary italic uppercase tracking-tighter">
            村口边缘节点 502 报错
          </h1>
          <p className="text-accent font-mono text-xs uppercase tracking-widest">
            CDN 状态: 邻居拔了电源线
          </p>
        </div>
        
        <p className="text-muted-foreground font-mono text-sm leading-relaxed">
          报错原因：地窖里的服务器被猫尿了，或者村长家的大黄狗正在撕咬网线。
          请稍后再试，或者直接去村口找老王。
        </p>
        
        <div className="pt-8">
          <button 
            onClick={() => setShowError(false)}
            className="flex items-center gap-2 mx-auto px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/80 transition-all border-b-4 border-accent shadow-lg active:translate-y-1"
          >
            <RefreshCcw className="h-4 w-4" />
            重试 (并没什么卵用)
          </button>
        </div>

        <div className="pt-12 font-mono text-[9px] text-muted-foreground/40 space-y-1">
          <p>故障 ID: VILLAGE-{Math.random().toString(36).substring(7).toUpperCase()}-DIJIAO-EDGE</p>
          <p>CDN 节点: 村口桥头-机房-03</p>
          <p>协议版本: IPoAC (鸽子载体协议) - 丢包严重</p>
        </div>
      </div>
    </div>
  );
}
