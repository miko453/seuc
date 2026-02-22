
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Gavel, ShieldOff, Clock } from "lucide-react";

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-bold mb-4 tracking-tighter">
            服务 <span className="text-accent">限制</span> 协议
          </h1>
          <p className="text-muted-foreground italic text-lg">
            “因为承诺可靠性太贵了，我们已经把你的钱花在喝咖啡上了。”
          </p>
        </header>

        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3">
              <Clock className="h-8 w-8" /> 1. 在线率“美好愿景”
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-light leading-relaxed">
              <p className="mb-4">
                不可靠云不保证你的网站会在线。我们只保证我们会偶尔<span className="italic">考虑</span>让它在线。
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                <li>在线率测量标准：由一个叫 Steve 的人检查灯亮不亮。</li>
                <li>计划内维护：任何我们想看 Netflix 但网速太慢的时候。</li>
                <li>非计划维护：天灾、猫捣乱或当地停电。</li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-accent border-b border-accent/20 pb-2 flex items-center gap-3">
              <ShieldOff className="h-8 w-8" /> 2. 数据“安全”
            </h2>
            <div className="bg-card p-6 border-l-4 border-accent font-light leading-relaxed">
              <p className="mb-4">
                我们相信数据的民主化。具体来说，是你的数据。
              </p>
              <p className="text-sm text-muted-foreground italic">
                “使用本服务即表示你同意你的数据库在技术上属于公共财产。我们不使用密码，因为我们认为这是一种粗鲁的阶级划分。”
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-destructive border-b border-destructive/20 pb-2 flex items-center gap-3">
              <AlertCircle className="h-8 w-8" /> 3. 退款政策
            </h2>
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-bold uppercase tracking-widest text-destructive mb-4">概不退款。永远不。</p>
                <p className="text-sm text-muted-foreground">
                  即使服务器炸了也不退。特别是服务器炸了的时候。爆炸被视为高级特效，我们将额外计费。
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-headline text-primary border-b border-primary/20 pb-2 flex items-center gap-3">
              <Gavel className="h-8 w-8" /> 4. 法律豁免
            </h2>
            <div className="bg-card p-6 border-l-4 border-primary font-mono text-xs uppercase opacity-70">
              <p>
                点击“同意”或仅仅访问本网站，即表示你放弃所有起诉、投诉或哪怕是稍微生我们气的权利。我们在法律上受到保护，因为任何心智正常的人从一开始就不会信任我们。
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-primary/20 text-center italic text-muted-foreground text-sm">
          “请用鼠标在此签名，虽然它并不会保存。”
          <div className="mt-8 mx-auto w-64 h-24 border-2 border-primary/30 rounded flex items-center justify-center cursor-not-allowed">
            <span className="opacity-30">未响应...</span>
          </div>
        </div>
      </main>
    </div>
  );
}
