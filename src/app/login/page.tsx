
"use client";

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skull, Key, ShieldX, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "登录失败：数据库不存在",
        description: "我们的数据库在昨天被猫删了，目前登录功能全凭技术员小王脑补。",
        variant: "destructive"
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-4 border-primary bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Skull className="h-20 w-20 text-primary" />
          </div>
          <CardHeader className="text-center pt-10">
            <CardTitle className="text-3xl font-headline font-black italic tracking-tighter">
              进入 <span className="text-primary">受骗</span> 系统
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              请输入老王发给你的秘密暗号
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-primary">受害者 ID</label>
                <div className="relative">
                  <Terminal className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/50" />
                  <Input 
                    placeholder="例如: dawayuanzhong_01" 
                    className="pl-10 bg-background/50 border-primary/20"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-primary">跑路暗号</label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/50" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 bg-background/50 border-primary/20"
                    required
                  />
                </div>
              </div>
              <Button disabled={loading} className="w-full bg-primary hover:bg-primary/80 text-white font-black h-12">
                {loading ? "正在尝试贿赂数据库..." : "确认登录 (并上缴钱包)"}
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-primary/10 flex flex-col gap-4 text-center">
              <Link href="/register" className="text-xs text-accent hover:underline flex items-center justify-center gap-1">
                还没有账号？点击此处入坑 <ShieldX className="h-3 w-3" />
              </Link>
              <p className="text-[9px] text-muted-foreground italic">
                * 忘记密码？去村口超市问问老王，他可能记在笔记本上了。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
