
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, ShieldAlert, Sparkles, Coins } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "注册失败：余额不足",
        description: "注册账号需要支付 5 个金币给村长，由于你没给，注册请求已被丢弃。",
        variant: "destructive"
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center p-4 py-20">
        <Card className="w-full max-w-lg border-4 border-accent bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center pt-10">
            <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserPlus className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-3xl font-headline font-black italic tracking-tighter">
              申请成为 <span className="text-accent">大冤种</span>
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              填写以下信息以授权我们清空你的银行卡
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-accent">真实姓名</label>
                  <Input placeholder="张三" className="bg-background/50 border-accent/20" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-accent">绰号</label>
                  <Input placeholder="韭菜一号" className="bg-background/50 border-accent/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent">常用邮箱 (用于接收欠费通知)</label>
                <Input type="email" placeholder="victim@example.com" className="bg-background/50 border-accent/20" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-accent">资产证明 (余额截图)</label>
                <Input type="file" className="bg-background/50 border-accent/20 text-xs" />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
                <Checkbox id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-[10px] text-muted-foreground leading-snug cursor-pointer">
                  我已阅读并同意 <Link href="/tos" className="text-accent font-bold hover:underline">《谁看啊服务条款》</Link>，承认我是一个自愿受骗的高级受害者，并同意村长随时调用我的电脑挖矿。
                </label>
              </div>

              <Button disabled={loading} className="w-full bg-accent hover:bg-accent/80 text-black font-black h-14 text-lg">
                {loading ? "正在生成受骗证书..." : "立即入坑"}
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-accent/10 flex flex-col gap-4 text-center">
              <Link href="/login" className="text-xs text-primary hover:underline flex items-center justify-center gap-1">
                已经入坑过了？点击此处继续受骗 <Coins className="h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
