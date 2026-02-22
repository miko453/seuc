
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Gavel, ShieldOff, Clock } from "lucide-react";

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-background py-20">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-black italic tracking-tighter mb-4">
            服务 <span className="text-accent underline">限制</span> 协议 (SLA)
          </h1>
          <p className="text-muted-foreground italic text-lg">
            “因为承诺可靠性太贵了，我们已经把你的钱花在喝咖啡和买五花肉上了。”
          </p>
        </header>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3 italic font-bold">
              <Clock className="h-8 w-8" /> 1. 在线率“美好愿景”
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-light leading-relaxed shadow-sm">
              <p className="mb-4 font-bold">
                村口云不保证你的网站会在线。我们只保证我们会偶尔考虑让它在线。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>在线率测量标准：由技术员小王检查灯亮不亮。</li>
                <li>计划内维护：任何我们想看 Netflix 但网速太慢的时候。</li>
                <li>非计划维护：由于村长下乡考察、猫捣乱或当地停电导致的瘫痪。</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-accent border-b border-accent/20 pb-2 flex items-center gap-3 italic font-bold">
              <ShieldOff className="h-8 w-8" /> 2. 数据“公共化”
            </h2>
            <div className="bg-card p-6 border-l-4 border-accent font-light leading-relaxed shadow-sm">
              <p className="mb-4 font-bold">
                我们相信数据的民主化。具体来说，是你的数据。
              </p>
              <p className="text-sm text-muted-foreground italic">
                “使用本服务即表示你同意你的数据库在技术上属于全村公共财产。我们不建议设置密码，因为我们认为这是一种粗鲁的阶级划分。”
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-destructive border-b border-destructive/20 pb-2 flex items-center gap-3 italic font-bold">
              <AlertCircle className="h-8 w-8" /> 3. 跑路政策
            </h2>
            <Card className="bg-destructive/5 border-destructive/20 shadow-none">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-black uppercase tracking-widest text-destructive mb-4 italic">概不退款。随时跑路。</p>
                <p className="text-sm text-muted-foreground">
                  即使服务器起火也不退。特别是服务器起火的时候。爆炸被视为高级动态特效，我们将为此额外计费。
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3 italic font-bold">
              <Gavel className="h-8 w-8" /> 4. 法律豁免
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-mono text-xs uppercase opacity-70">
              <p>
                仅仅访问本网站，即表示你放弃所有起诉、投诉或哪怕是稍微生我们气的权利。我们在法律上受到保护，因为任何心智正常的人从一开始就不会把业务放在地窖里。
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-primary/20 text-center italic text-muted-foreground text-sm">
          “请用鼠标在此签名，虽然它并不会被保存，仅用于收集您的指纹信息。”
          <div className="mt-8 mx-auto w-64 h-24 border-2 border-dashed border-primary/30 rounded flex items-center justify-center cursor-not-allowed">
            <span className="opacity-30">技术员正在睡觉，无法签名...</span>
          </div>
        </div>
      </main>
    </div>
  );
}
