
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, Ghost, ShieldAlert } from "lucide-react";

export default function TOSPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-2xl mx-auto px-4 py-32 text-center">
        <Link href="/" className="inline-flex items-center text-sm text-primary hover:underline mb-12">
          <ChevronLeft className="h-4 w-4 mr-1" /> 回家种地吧
        </Link>
        
        <header className="mb-16">
          <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-6xl font-headline font-black tracking-tighter italic mb-4">
            服务条款 <span className="text-accent">(TOS)</span>
          </h1>
        </header>

        <section className="space-y-12">
          <div className="relative p-12 border-4 border-primary shadow-[0_0_30px_rgba(34,197,94,0.1)] rounded-xl bg-card">
            <h2 className="text-8xl font-black text-primary opacity-90 animate-glitch tracking-tighter mb-8">
              谁看啊？
            </h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              既然你点进来了，说明你是一个非常严谨的人。
              <br /><br />
              但在村口云，严谨是没有用的。当你点击“购买”那一刻，你已经默认授权我们：
              <br /><br />
              1. 随时随地卷钱跑路。
              <br />
              2. 把你的数据卖给村口的李大妈。
              <br />
              3. 在你网站宕机时在大厅播放广场舞乐曲。
            </p>
          </div>

          <div className="p-6 bg-destructive/5 border border-destructive/20 rounded-lg italic text-[10px] text-muted-foreground font-mono">
            提示：本条款每隔 5 秒会自动随机修改一次，取决于村长的心情。
          </div>

          <Button size="lg" className="w-full bg-accent text-black font-black py-8 text-xl" asChild>
            <Link href="/dashboard">我没看，但我同意被绿</Link>
          </Button>
        </section>

        <div className="mt-24 opacity-20 hover:opacity-100 transition-opacity">
          <Ghost className="h-12 w-12 mx-auto mb-4" />
          <p className="text-[9px] font-mono">
            本网页由信鸽载体协议传输，阅读本行文字将消耗 0.5 颗谷子。
          </p>
        </div>
      </main>
    </div>
  );
}
