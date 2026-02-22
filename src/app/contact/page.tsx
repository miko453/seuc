"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Loader2, Mail, MessageCircle, PhoneOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a really long, annoying delay to show "unreliability"
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "错误：工单已被无视",
        description: "你的反馈已收到，并为了节省磁盘空间被立即删除了。祝你有愉快的一天！",
        variant: "destructive",
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-headline font-bold mb-4 tracking-tighter">
            取得 <span className="text-accent italic">“联系”</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            我们没有客服人员。你的邮件会直接发送到回收中心的一台无人看管的打印机上。
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-primary/20 text-center p-6">
            <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">电子邮件</h3>
            <p className="text-xs text-muted-foreground font-mono">null@uncertain.cloud</p>
          </Card>
          <Card className="bg-card border-primary/20 text-center p-6">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">在线聊天</h3>
            <p className="text-xs text-muted-foreground font-mono">状态: 离线 (永久)</p>
          </Card>
          <Card className="bg-card border-primary/20 text-center p-6">
            <PhoneOff className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-1">电话</h3>
            <p className="text-xs text-muted-foreground font-mono">对着虚空尖叫即可。</p>
          </Card>
        </div>

        <Card className="bg-card border-accent/20 border-2 overflow-hidden">
          <div className="bg-accent/10 p-4 border-b border-accent/20">
            <p className="text-[10px] font-mono text-accent text-center uppercase tracking-widest font-bold">
              预计响应时间：4-6 个商业世纪
            </p>
          </div>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase opacity-70">受害者姓名</label>
                  <Input 
                    placeholder="请输入姓名..." 
                    className="bg-background border-primary/30 focus:border-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase opacity-70">待骚扰邮箱</label>
                  <Input 
                    type="email" 
                    placeholder="请输入邮箱..." 
                    className="bg-background border-primary/30 focus:border-accent"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase opacity-70">你无用的哀求</label>
                <Textarea 
                  placeholder="告诉我们坏了什么，虽然我们不会修..." 
                  className="min-h-[150px] bg-background border-primary/30 focus:border-accent"
                  required
                />
              </div>

              <div className="pt-4">
                <Button 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/80 text-white font-bold h-14 uppercase tracking-widest text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      正在忽略请求...
                    </>
                  ) : (
                    <>
                      发送到虚无
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center opacity-30 text-[10px] font-mono italic">
          免责声明：提交此表单即表示你授予我们将你的联系信息出售给至少 15 家不同的保险营销公司的权限。
        </div>
      </main>
    </div>
  );
}