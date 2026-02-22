"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

const ANNOUNCEMENTS = [
  "因村长家大黄狗咬断了网线，目前所有流量由信鸽手动转接。",
  "技术员小王为了省电，把主服务器关了去给电动车充电了。",
  "隔壁老王改了 WiFi 密码，我们正在尝试暴力破解中...",
  "因房东涨价，我们决定把 40 个客户塞入同一块 2GB 的内存里。",
  "重要公告：我们的数据库刚刚不小心被猫删了，祝大家新年快乐。",
  "因交不起电费，地窖服务器已切换为手摇发电模式，带宽随摇随到。",
  "检测到村口变压器起火，部分节点可能呈现‘火化运行’状态。",
  "公告：内存超开倍率已从 1000% 临时上调至 9999%，性能全靠想象。",
];

export function HeroAnnouncement() {
  const [text, setText] = useState(ANNOUNCEMENTS[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setText(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);
        setIsGlitching(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest text-accent border border-accent/30 rounded-full transition-all duration-200 ${isGlitching ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <AlertCircle className="h-3 w-3 animate-pulse" />
      <span>[ 系统公告 ]：{text}</span>
    </div>
  );
}
