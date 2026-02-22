
"use client";

import { useEffect, useState } from "react";
import { AlertCircle, RefreshCcw, Skull } from "lucide-react";

export function GlitchOverlay() {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const triggerRandomError = () => {
      // 5% chance of triggering a random "Village 502" error every 15 seconds
      if (Math.random() < 0.05) {
        setShowError(true);
      }
    };

    const interval = setInterval(triggerRandomError, 15000);
    return () => clearInterval(interval);
  }, []);

  if (!showError) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0c1a0e] flex flex-col items-center justify-center p-6 text-center animate-flicker">
      <div className="max-w-md space-y-6">
        <div className="relative">
          <Skull className="h-24 w-24 text-primary mx-auto animate-glitch" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-xl rounded-full" />
        </div>
        
        <h1 className="text-4xl font-headline font-bold text-primary italic">
          村口骨干网 502 报错
        </h1>
        <p className="text-muted-foreground font-mono text-sm">
          可能是邻居老王换了 WiFi 密码，或者是地窖里的服务器被猫尿了。
          请稍后再试，或者直接联系村长。
        </p>
        
        <div className="pt-8">
          <button 
            onClick={() => setShowError(false)}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-primary text-white font-bold uppercase tracking-widest hover:bg-primary/80 transition-all border-2 border-accent/50"
          >
            <RefreshCcw className="h-4 w-4" />
            重试 (并没什么卵用)
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground/50 pt-12">
          故障 ID: VILLAGE-{Math.random().toString(36).substring(7).toUpperCase()}-DIJIAO-EDGE
        </p>
      </div>
    </div>
  );
}
