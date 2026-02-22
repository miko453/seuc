"use client";

import { use } from "react";
import { PRODUCTS } from "@/lib/satire-data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Zap, AlertTriangle, ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const [isBuying, setIsBuying] = useState(false);
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <h1 className="text-4xl font-headline font-bold text-destructive mb-4">404 - 业务已跑路</h1>
        <p className="text-muted-foreground mb-8">我们还没来得及开发这个受骗入口。</p>
        <Button asChild><Link href="/">返回村口</Link></Button>
      </div>
    );
  }

  const handleBuy = () => {
    setIsBuying(true);
    setTimeout(() => {
      setIsBuying(false);
      toast({
        title: "支付失败：余额不足 (指我们)",
        description: "由于我们的银行账户已被冻结，目前无法处理您的订单。建议直接给老王微信转账。",
        variant: "destructive",
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center text-sm text-primary hover:underline mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" /> 返回全线业务
        </Link>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-12">
            <header>
              <div className="flex items-center gap-3 mb-2">
                <Badge className="bg-primary">{product.category}</Badge>
                <span className="text-[10px] font-mono opacity-50 italic">极致超开架构</span>
              </div>
              <h1 className="text-5xl font-headline font-bold tracking-tighter mb-4 italic">
                定制你的 <span className="text-accent">{product.title}</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>
            </header>

            <div className="space-y-10">
              {product.options.map((option, idx) => (
                <section key={idx} className="space-y-6">
                  <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" /> {option.label}
                    </h3>
                  </div>
                  <RadioGroup defaultValue={option.items[0]} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {option.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 border-2 border-primary/10 p-4 rounded-lg bg-card hover:border-accent transition-colors cursor-pointer">
                        <RadioGroupItem value={item} id={`${idx}-${i}`} />
                        <Label htmlFor={`${idx}-${i}`} className="flex flex-col cursor-pointer w-full">
                          <span className="font-bold">{item}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <p className="text-[11px] text-muted-foreground italic font-mono">提示：{option.hint}</p>
                </section>
              ))}
            </div>

            <section className="p-6 border-2 border-dashed border-destructive/20 rounded-xl bg-destructive/5">
              <div className="flex items-center gap-3 mb-2 text-destructive">
                <AlertTriangle className="h-6 w-6" />
                <h4 className="font-bold uppercase tracking-widest">高风险告知</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                下单本业务即表示你同意：你的数据可能在任何时候因为技术员下班而丢失。
                如果你对在线率有任何要求，建议去村口找老王。
              </p>
            </section>
          </div>

          <aside className="sticky top-24">
            <Card className="border-4 border-primary shadow-[0_0_20px_rgba(34,197,94,0.1)]">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-sm uppercase tracking-tighter">计费概览 (受骗预估)</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>业务单价</span>
                  <span className="font-bold text-primary">${product.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>超开附加费</span>
                  <span>$88.88</span>
                </div>
                <div className="flex justify-between text-sm text-destructive font-bold">
                  <span>跑路保险 (强制)</span>
                  <span>$250.00</span>
                </div>
                <div className="pt-4 border-t border-primary/20">
                  <div className="flex justify-between items-end">
                    <span className="font-bold">每{product.unit}预计支付:</span>
                    <span className="text-3xl font-black text-primary">${(parseFloat(product.price) + 338.88).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={handleBuy} 
                  disabled={isBuying}
                  className="w-full bg-accent text-black font-black py-8 text-xl border-b-4 border-primary shadow-lg"
                >
                  {isBuying ? (
                    <><Loader2 className="mr-2 animate-spin" /> 正在清空钱包...</>
                  ) : (
                    "确认受骗 (立即购买)"
                  )}
                </Button>
              </CardFooter>
            </Card>
            <p className="mt-4 text-[9px] text-muted-foreground text-center italic">
              * 点击购买即视为承认你是一个大冤种。
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}