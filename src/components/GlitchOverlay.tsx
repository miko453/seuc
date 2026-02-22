"use client";

import { useEffect, useState } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export function GlitchOverlay() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const triggerRandomError = () => {
      // 5% chance of triggering a random "CDN 502" error every 15 seconds
      if (Math.random() < 0.05) {
        setShowError(true);
      }
    };

    const interval = setInterval(triggerRandomError, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!showError) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#221F29] flex flex-col items-center justify-center p-6 text-center animate-flicker">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <AlertCircle className="h-24 w-24 text-accent mx-auto animate-glitch" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/20 blur-xl rounded-full" />
        </div>
        
        <h1 className="text-4xl font-headline font-bold text-accent italic">
          CDN 错误 502
        </h1>
        <p className="text-muted-foreground font-mono text-sm">
          发生了一个错误的网关。很可能是某个乡村地下室的服务器发电机没油了。
          或者是邻居家的微波炉造成了信号干扰。
        </p>
        
        <div className="pt-8">
          <button 
            onClick={() => setShowError(false)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/80 transition-all border-2 border-accent/50"
          >
            <RefreshCcw className="h-4 w-4" />
            重试连接 (没用)
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground/50 pt-12">
          追踪 ID: UNCERTAIN-{Math.random().toString(36).substring(7).toUpperCase()}-VILLAGE-EDGE
        </p>
      </div>
    </div>
  );
}
