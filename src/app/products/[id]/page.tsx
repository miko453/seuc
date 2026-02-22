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
  ShoppingCart, Hourglass, CheckCircle2, XCircle, Cpu, HardDrive, Network, Globe, Layers
} from "lucide-react";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription, DialogFooter 
} from "@/components/ui/dialog";
import Link from "next/link";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showQueue, setShowQueue] = useState(false);
  const [currentEvent, setCurrentEvent] = useState("");
  const [progress, setProgress] = useState(0);
  const [orderResult, setOrderResult] = useState<{ success: boolean; message: string } | null>(null);
  
  // Dynamic config states
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
        <p className="text-muted-foreground mb-8">该产品可能已被村长拿去抵债了。</p>
        <Button asChild><Link href="/products">返回全线业务</Link></Button>
      </div>
    );
  }

  const handleOrder = () => {
    setIsProcessing(true);
    setShowQueue(true);
    setProgress(0);
    setOrderResult(null);

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          const reason = ORDER_FAIL_REASONS[Math.floor(Math.random() * ORDER_FAIL_REASONS.length)];
          setOrderResult({ success: false, message: reason });
          setIsProcessing(false);
        }, 1000);
      }
      setProgress(currentProgress);
      setCurrentEvent(QUEUE_EVENTS[Math.floor(Math.random() * QUEUE_EVENTS.length)]);
    }, 800);
  };

  const updateConfig = (label: string, value: any) => {
    setConfigValues(prev => ({ ...prev, [label]: value }));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/products" className="inline-flex items-center text-sm text-primary hover:underline mb-8 font-bold">
          <ChevronLeft className="h-4 w-4 mr-1" /> 返回产品中心
        </Link>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <header className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">{product.category}</Badge>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest font-bold">SPEC_ID: {product.id.toUpperCase()}</span>
              </div>
              <h1 className="text-5xl font-headline font-black italic tracking-tighter text-foreground">
                配置您的 <span className="text-primary">{product.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                {product.description}
              </p>
            </header>

            <div className="space-y-12">
              {product.options.map((option, idx) => (
                <section key={idx} className="space-y-6">
                  <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <h3 className="text-lg font-bold italic flex items-center gap-2">
                      {option.label.includes('CPU') && <Cpu className="h-4 w-4 text-primary" />}
                      {option.label.includes('内存') && <Zap className="h-4 w-4 text-primary" />}
                      {option.label.includes('硬盘') || option.label.includes('空间') ? <HardDrive className="h-4 w-4 text-primary" /> : null}
                      {option.label.includes('网络') || option.label.includes('带宽') ? <Globe className="h-4 w-4 text-primary" /> : null}
                      {option.label.includes('操作系统') || option.label.includes('版本') ? <Layers className="h-4 w-4 text-primary" /> : null}
                      {option.label}
                    </h3>
                    {option.type === 'slider' && (
                      <Badge variant="outline" className="text-accent border-accent font-mono">
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
                      <div className="flex justify-between mt-2 text-[10px] font-mono opacity-50">
                        <span>{option.range.min} {option.range.unit}</span>
                        <span>{option.range.max} {option.range.unit}</span>
                      </div>
                    </div>
                  )}

                  {option.type === 'select' && (
                    <Select value={configValues[option.label]} onValueChange={(val) => updateConfig(option.label, val)}>
                      <SelectTrigger className="w-full bg-white border-2 border-primary/10 h-12">
                        <SelectValue placeholder={`选择${option.label}...`} />
                      </SelectTrigger>
                      <SelectContent>
                        {option.items.map((item, i) => (
                          <SelectItem key={i} value={item}>{item}</SelectItem>
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
                        <div key={i} className={`flex items-center space-x-3 border-2 p-4 rounded-xl bg-white shadow-sm transition-all cursor-pointer group ${configValues[option.label] === item ? 'border-primary' : 'border-transparent hover:border-primary/40'}`}>
                          <RadioGroupItem value={item} id={`${idx}-${i}`} className="text-primary" />
                          <Label htmlFor={`${idx}-${i}`} className="flex flex-col cursor-pointer flex-1">
                            <span className="font-bold text-sm group-hover:text-primary transition-colors">{item}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                  
                  <p className="text-[11px] text-muted-foreground italic font-mono bg-primary/5 p-3 rounded-lg border border-primary/10">
                    ⚠️ 风险提示：{option.hint}
                  </p>
                </section>
              ))}
            </div>

            <section className="p-8 border-4 border-dashed border-destructive/20 rounded-2xl bg-destructive/5 space-y-4">
              <div className="flex items-center gap-3 text-destructive">
                <AlertTriangle className="h-6 w-6" />
                <h4 className="font-black uppercase tracking-tighter text-xl italic">受骗告知书</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic font-medium">
                点击“确认下单”即表示您已充分理解：本业务的所有硬件规格仅供参考（指脑补）。
                我们保留在发电机没油、村长心情不好、或老王改 WiFi 密码时随时中断服务的权利。
              </p>
            </section>
          </div>

          <aside className="sticky top-24">
            <Card className="border-4 border-primary shadow-2xl overflow-hidden rounded-2xl bg-white">
              <CardHeader className="bg-primary text-white p-6">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm uppercase font-black tracking-widest">动态账单 (实打实扣)</CardTitle>
                  <ShoppingCart className="h-4 w-4 opacity-50" />
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">基础月租</span>
                    <span className="font-black">${product.price} / {product.unit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">硬件超开附加费</span>
                    <span className="font-black text-destructive">$1,299.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">技术员午餐费</span>
                    <span className="font-black">$25.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-destructive font-bold">
                    <span className="flex items-center gap-1">跑路保险 (强制) <AlertTriangle className="h-3 w-3" /></span>
                    <span>$500.00</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-primary/20 space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-black text-lg">当前应付:</span>
                    <div className="text-right">
                      <p className="text-4xl font-black text-primary italic leading-none">
                        ${(parseFloat(product.price) + 1824).toFixed(2)}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1 uppercase font-bold tracking-widest">初次入坑费</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-center text-muted-foreground italic leading-tight">
                    * 最终扣费以村委会收到的五花肉斤数为准。
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button 
                  onClick={handleOrder}
                  disabled={isProcessing}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black py-8 text-xl rounded-xl shadow-lg border-b-4 border-primary/60 active:border-b-0 active:translate-y-1 transition-all"
                >
                  {isProcessing ? (
                    <><Hourglass className="mr-2 h-5 w-5 animate-spin" /> 正在贿赂...</>
                  ) : (
                    "确认下单 (立即入坑)"
                  )}
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-8 p-4 border border-primary/20 bg-primary/5 rounded-xl text-center space-y-2">
              <p className="text-[10px] font-mono font-bold text-primary flex items-center justify-center gap-2">
                <CheckCircle2 className="h-3 w-3" /> 认证: 村级 5A 受骗机构
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Dialog open={showQueue} onOpenChange={(open) => !isProcessing && setShowQueue(open)}>
        <DialogContent className="sm:max-w-md border-4 border-primary p-8">
          <DialogHeader className="text-center space-y-4">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              {isProcessing ? (
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
              ) : orderResult?.success ? (
                <CheckCircle2 className="h-10 w-10 text-primary" />
              ) : (
                <XCircle className="h-10 w-10 text-destructive" />
              )}
            </div>
            <DialogTitle className="text-2xl font-black italic tracking-tighter">
              {isProcessing ? "处理请求中..." : "下单失败"}
            </DialogTitle>
            <DialogDescription className="text-foreground font-medium italic">
              {isProcessing ? currentEvent : orderResult?.message}
            </DialogDescription>
          </DialogHeader>

          {isProcessing && (
            <div className="py-6 space-y-2">
              <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                <span>正在排队...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3 bg-primary/10" />
            </div>
          )}

          {!isProcessing && (
            <DialogFooter className="sm:justify-center">
              <Button 
                onClick={() => setShowQueue(false)}
                className="bg-destructive hover:bg-destructive/80"
              >
                我知道了，我是大冤种
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
