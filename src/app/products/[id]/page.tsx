"use client";

import { use, useEffect, useState } from "react";
import { PRODUCTS, QUEUE_EVENTS, ORDER_FAIL_REASONS } from "@/lib/satire-data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Zap, AlertTriangle, ChevronLeft, Loader2, 
  ShoppingCart, Hourglass, CheckCircle2, XCircle, Cpu, HardDrive, Network, Globe, Layers, Boxes, Bird
} from "lucide-react";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogFooter 
} from "@/components/ui/dialog";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [currentEvent, setCurrentEvent] = useState("");
  const [progress, setProgress] = useState(0);
  const [orderResult, setOrderResult] = useState<{ success: boolean; message: string } | null>(null);
  
  const [configValues, setConfigValues] = useState<Record<string, any>>({});

  useEffect(() => {
    if (product) {
      const initial: Record<string, any> = {};
      product.options.forEach(opt => {
        if (opt.type === 'slider' && opt.range) initial[opt.label] = opt.range.min;
        else if (opt.items.length > 0) initial[opt.label] = opt.items[0];
      });
      setConfigValues(initial);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <h1 className="text-4xl font-headline font-bold text-destructive mb-4 italic">404 - 业务已跑路</h1>
        <Button asChild><Link href="/products">返回全线业务</Link></Button>
      </div>
    );
  }

  const handleOrder = () => {
    setIsProcessing(true);
    setShowQueue(true);
    setProgress(0);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 10;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          const reason = ORDER_FAIL_REASONS[Math.floor(Math.random() * ORDER_FAIL_REASONS.length)];
          setOrderResult({ success: false, message: reason });
          setIsProcessing(false);
        }, 1200);
      }
      setProgress(currentProgress);
      setCurrentEvent(QUEUE_EVENTS[Math.floor(Math.random() * QUEUE_EVENTS.length)]);
    }, 800);
  };

  const updateConfig = (label: string, value: any) => {
    setConfigValues(prev => ({ ...prev, [label]: value }));
  };

  const getOptionIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('cpu') || l.includes('计算') || l.includes('核心')) return <Cpu className="h-4 w-4 text-primary" />;
    if (l.includes('内存') || l.includes('ram')) return <Zap className="h-4 w-4 text-primary" />;
    if (l.includes('盘') || l.includes('空间') || l.includes('存储') || l.includes('容量')) return <HardDrive className="h-4 w-4 text-primary" />;
    if (l.includes('网') || l.includes('带') || l.includes('流量') || l.includes('cdn')) return <Globe className="h-4 w-4 text-primary" />;
    if (l.includes('系统') || l.includes('镜像')) return <Layers className="h-4 w-4 text-primary" />;
    return <Boxes className="h-4 w-4 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20 pt-10">
      <main className="max-w-6xl mx-auto px-4">
        <Link href="/products" className="inline-flex items-center text-sm text-primary hover:underline mb-8 font-bold">
          <ChevronLeft className="h-4 w-4 mr-1" /> 返回全线业务
        </Link>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">{product.category}</Badge>
                <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase">ID: {product.id}</span>
              </div>
              <h1 className="text-5xl font-headline font-black italic tracking-tighter text-foreground">
                定制您的 <span className="text-primary">{product.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed italic">{product.description}</p>
            </header>

            <div className="space-y-12">
              {product.options.map((option, idx) => (
                <section key={idx} className="space-y-6">
                  <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <h3 className="text-lg font-bold italic flex items-center gap-2 uppercase tracking-tighter">
                      {getOptionIcon(option.label)}
                      {option.label}
                    </h3>
                    {option.type === 'slider' && (
                      <Badge variant="outline" className="text-accent border-accent font-mono font-bold">
                        {configValues[option.label] || option.range?.min} {option.range?.unit}
                      </Badge>
                    )}
                  </div>

                  {option.type === 'slider' && option.range && (
                    <div className="px-2 pt-4">
                      <Slider 
                        value={[configValues[option.label] || option.range.min]}
                        max={option.range.max}
                        min={option.range.min}
                        step={option.range.step}
                        onValueChange={(val) => updateConfig(option.label, val[0])}
                        className="[&_.relative]:bg-primary"
                      />
                      <div className="flex justify-between mt-2 text-[10px] font-mono opacity-50 font-bold uppercase">
                        <span>Min: {option.range.min} {option.range.unit}</span>
                        <span>Max: {option.range.max} {option.range.unit}</span>
                      </div>
                    </div>
                  )}

                  {option.type === 'select' && (
                    <Select value={configValues[option.label]} onValueChange={(val) => updateConfig(option.label, val)}>
                      <SelectTrigger className="w-full bg-white border-2 border-primary/10 h-14 text-base font-bold italic">
                        <SelectValue placeholder={`选择${option.label}...`} />
                      </SelectTrigger>
                      <SelectContent>
                        {option.items.map((item, i) => (
                          <SelectItem key={i} value={item} className="font-medium">{item}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {option.type === 'radio' && (
                    <RadioGroup 
                      value={configValues[option.label]} 
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      onValueChange={(val) => updateConfig(option.label, val)}
                    >
                      {option.items.map((item, i) => (
                        <div key={i} className={cn(
                          "flex items-center space-x-3 border-2 p-5 rounded-xl bg-white shadow-sm transition-all cursor-pointer group",
                          configValues[option.label] === item ? 'border-primary ring-2 ring-primary/10 bg-primary/[0.02]' : 'border-border hover:border-primary/40'
                        )}>
                          <RadioGroupItem value={item} id={`${idx}-${i}`} className="text-primary" />
                          <Label htmlFor={`${idx}-${i}`} className="flex flex-col cursor-pointer flex-1">
                            <span className="font-bold text-base group-hover:text-primary transition-colors">{item}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                  
                  <div className="text-[11px] text-muted-foreground italic font-mono bg-primary/5 p-3 rounded-lg border border-primary/10 flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 mt-0.5 shrink-0 text-amber-500" />
                    <span>⚠️ {option.hint}</span>
                  </div>
                </section>
              ))}
            </div>

            <section className="p-10 border-4 border-dashed border-destructive/20 rounded-2xl bg-destructive/5 space-y-4">
              <h4 className="font-black uppercase tracking-tighter text-2xl italic text-destructive flex items-center gap-2">
                <AlertTriangle className="h-8 w-8" /> 风险警告
              </h4>
              <p className="text-base text-muted-foreground leading-relaxed italic font-bold">
                本产品由于硬件老化及内存超卖，不保证任何 SLA。一旦下单，即表示您已默认授予村长随时跑路的合法权利。
              </p>
            </section>
          </div>

          <aside className="sticky top-24">
            <Card className="border-4 border-primary shadow-2xl overflow-hidden rounded-2xl bg-white">
              <CardHeader className="bg-primary text-white p-6">
                <CardTitle className="text-sm uppercase font-black tracking-widest italic">受骗总额估算 (实时更新)</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-bold uppercase">基础入坑费</span>
                    <span className="font-black text-lg">${product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground font-bold uppercase">超开附加费</span>
                    <span className="font-black text-destructive text-lg">$1,299.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-destructive font-black p-3 bg-destructive/10 rounded-lg">
                    <span className="flex items-center gap-1 uppercase">跑路保险 (强制)</span>
                    <span>$800.00</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-primary/20 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-xl italic uppercase">当前预缴:</span>
                    <div className="text-right">
                      <p className="text-5xl font-black text-primary italic leading-none tracking-tighter">
                        ${(parseFloat(product.price) + 2099).toFixed(2)}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-2 uppercase font-black">按秒扣费 (不退还)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button 
                  onClick={handleOrder}
                  disabled={isProcessing}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black py-10 text-2xl rounded-xl shadow-lg border-b-8 border-primary/60 active:border-b-0 active:translate-y-2 transition-all"
                >
                  {isProcessing ? <><Hourglass className="mr-3 h-7 w-7 animate-spin" /> 正在贿赂...</> : "确认入坑"}
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </div>
      </main>

      <Dialog open={showQueue} onOpenChange={(open) => !isProcessing && setShowQueue(open)}>
        <DialogContent className="sm:max-w-md border-8 border-primary p-10 bg-white">
          <DialogHeader className="text-center space-y-6">
            <div className="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-primary/20">
              {isProcessing ? <Loader2 className="h-12 w-12 text-primary animate-spin" /> : <XCircle className="h-12 w-12 text-destructive" />}
            </div>
            <DialogTitle className="text-3xl font-black italic tracking-tighter text-primary uppercase">
              {isProcessing ? "订单在飞..." : "处理失败"}
            </DialogTitle>
            <DialogDescription className="text-foreground text-lg font-bold italic bg-muted/50 p-4 rounded-xl">
              {isProcessing ? currentEvent : orderResult?.message}
            </DialogDescription>
          </DialogHeader>

          {isProcessing && (
            <div className="py-8 space-y-4">
              <div className="flex justify-between text-xs font-mono font-black uppercase tracking-widest text-primary">
                <span>正在贿赂村委会...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-4 bg-primary/10 rounded-full" />
              <p className="text-[10px] text-center text-muted-foreground italic font-mono uppercase">
                队列深度: 82,910,320 受害者
              </p>
            </div>
          )}

          {!isProcessing && (
            <DialogFooter className="sm:justify-center">
              <Button onClick={() => setShowQueue(false)} className="bg-destructive hover:bg-destructive/80 text-white font-black px-10 h-14 text-lg rounded-xl shadow-xl">
                知道了，我是大冤种
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
